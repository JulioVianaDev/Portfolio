describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:4173");
  });
});

describe("Header Navigation", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit("/");
  });

  it("should navigate to about section when clicking about link in header", () => {
    // Click the about link in the header
    cy.get('a[href="#about"]').click();

    // Verify URL includes the about section
    cy.url().should("include", "#about");

    // Wait for the animation to complete and element to be visible
    cy.get("#about").should("be.visible");
    
    // Wait for scroll animation to complete (adjust timeout as needed)
    cy.wait(1000); // Adjust this based on your animation duration
    
    
    // Verify the about section is in viewport using custom command
    cy.get("#about").isInViewport();

    // Verify the about section has the correct content
    cy.get("#about").within(() => {
      // Check if the section heading exists
      cy.get("h2").should("exist");

      // Check if the description paragraph exists
      cy.get("p.text-lg").should("exist");

      // Check if the cards grid exists
      cy.get(".grid").should("exist");

      // Check if there are 4 cards
      cy.get(".grid > div").should("have.length", 4);
    });
  });
});