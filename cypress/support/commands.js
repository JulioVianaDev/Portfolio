// cypress/support/commands.js

// Custom command to check if element is in viewport
Cypress.Commands.add('isInViewport', { prevSubject: true }, (subject, options = {}) => {
  const { threshold = 0.1 } = options; // At least 10% of element should be visible
  
  cy.window().then((window) => {
    const element = subject[0];
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    // Check if element is at least partially visible
    const verticalInView = rect.bottom > 0 && rect.top < windowHeight;
    const horizontalInView = rect.right > 0 && rect.left < windowWidth;
    
    // Calculate visibility ratio
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
    const elementArea = rect.height * rect.width;
    const visibleArea = Math.max(0, visibleHeight) * Math.max(0, visibleWidth);
    const visibilityRatio = elementArea > 0 ? visibleArea / elementArea : 0;
    
    expect(verticalInView && horizontalInView, 
      `Element should be in viewport. Rect: ${JSON.stringify(rect)}, Window: ${windowWidth}x${windowHeight}`
    ).to.be.true;
    
    expect(visibilityRatio, 
      `At least ${threshold * 100}% of element should be visible. Current: ${(visibilityRatio * 100).toFixed(1)}%`
    ).to.be.at.least(threshold);
  });
  
  return cy.wrap(subject);
});

// Alternative: Custom command that returns a boolean for more flexible usage
Cypress.Commands.add('checkInViewport', { prevSubject: true }, (subject) => {
  return cy.window().then((window) => {
    const element = subject[0];
    const rect = element.getBoundingClientRect();
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  });
});

// Custom command to wait for element to be scrolled into view
Cypress.Commands.add('waitForInView', { prevSubject: true }, (subject, options = {}) => {
  const { timeout = 5000, interval = 100, threshold = 0.1 } = options;
  
  return cy.wrap(subject).then(($el) => {
    return new Cypress.Promise((resolve) => {
      const checkInView = () => {
        const rect = $el[0].getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        
        // More flexible viewport detection - element is considered in view if:
        // - At least part of it is visible vertically AND horizontally
        // - OR if it's at least partially within the viewport boundaries
        const verticalInView = rect.bottom > 0 && rect.top < windowHeight;
        const horizontalInView = rect.right > 0 && rect.left < windowWidth;
        const inView = verticalInView && horizontalInView;
        
        // Alternative: Check if a certain percentage of the element is visible
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
        const elementArea = rect.height * rect.width;
        const visibleArea = Math.max(0, visibleHeight) * Math.max(0, visibleWidth);
        const visibilityRatio = elementArea > 0 ? visibleArea / elementArea : 0;
        
        const isVisible = inView && visibilityRatio >= threshold;
        
        if (isVisible) {
          resolve($el);
        } else if (Date.now() - startTime < timeout) {
          setTimeout(checkInView, interval);
        } else {
          // More detailed error message
          const errorMsg = `Element not in viewport after ${timeout}ms. ` +
            `Element rect: top=${rect.top}, bottom=${rect.bottom}, left=${rect.left}, right=${rect.right}. ` +
            `Window: height=${windowHeight}, width=${windowWidth}. ` +
            `Visibility ratio: ${(visibilityRatio * 100).toFixed(1)}%`;
          throw new Error(errorMsg);
        }
      };
      
      const startTime = Date.now();
      checkInView();
    });
  });
});