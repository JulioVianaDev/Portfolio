import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en-US" | "pt-BR";

type TranslationKeys =
  | "about"
  | "experience"
  | "skills"
  | "education"
  | "awards"
  | "contact"
  | "hero"
  | "footer"
  | "aboutSection"
  | "experienceSection"
  | "skillsSection"
  | "educationSection"
  | "awardsSection"
  | "contactSection";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<Language, Record<TranslationKeys, any>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const translations: Record<Language, Record<TranslationKeys, any>> = {
  "en-US": {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    awards: "Awards",
    contact: "Contact",
    hero: {
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      description:
        "I build exceptional digital experiences that make an impact.",
      cta: "Get in touch",
    },
    footer: {
      rights: "All rights reserved.",
      made: "Made with",
      by: "by",
    },
    aboutSection: {
      title: "About Me",
      subtitle: "My Professional Summary",
      description:
        "I started programming 12 years ago and have been working as a developer for 8 years. I participated in robotics competitions in the USA, where I won awards. Currently, I am a Full-Stack Developer focused on optimizing API performance to handle millions of requests.",
      cards: {
        performance: {
          title: "Performance Optimization",
          description:
            "Reduced CPU usage from 92% to 18% and improved request handling capacity by up to 42x.",
        },
        fullstack: {
          title: "Full-Stack Development",
          description:
            "Experienced in building complete systems with React, React Native, Ruby on Rails, and more.",
        },
        architecture: {
          title: "System Architecture",
          description:
            "Expertise in microservices, event-driven architecture, and designing scalable systems.",
        },
        robotics: {
          title: "Robotics",
          description:
            "Led a robotics team to victory in international competitions, defeating a NASA team.",
        },
      },
    },
    experienceSection: {
      title: "Experience",
      subtitle: "My Professional Journey",
      roles: {
        fullstack: "Mid Level/Senior Fullstack",
        midFullstack: "Mid Level Fullstack",
        contentTeacher: "Mid Level Content Teacher",
        freelancer: "Fullstack Developer",
        srFullstack: "Senior Fullstack Developer",
      },
      companies: {
        softwareHouse: "Software House",
        enterness: "Enterness Easychannel",
        conectae: "LMS Platform Development Conectae",
        supergeeks: "SuperGeeks",
        freelancer: "Freelancer",
      },
      achievements: {
        softwareHouse: [
          "Developed and implemented a project and team management system for a software company, ensuring efficiency and productivity.",
          "Implemented a payment and inventory management system for an e-commerce company, ensuring seamless and efficient transactions.",
          "Developed and implemented a monitoring and alerting system to ensure service availability and performance, ensuring a consistent and satisfactory user experience.",
          "Architected an entire AI system with automations and monitoring for a healthcare company, ensuring efficiency and productivity.",
          "Resolved performance issues using distributed systems and refactoring to Golang",
        ],
        enterness: [
          "Optimized API performance to handle millions of requests by reducing CPU usage from 92% to 18%, significantly lowering infrastructure costs.",
          "Increased request handling capacity by up to 42x in some cases, ensuring the system could scale efficiently under high traffic loads.",
          "Reduced average report generation time from 10 seconds to 210ms, improving user experience and system responsiveness.",
          "Refactored database queries and caching strategies to improve overall system performance, reducing latency and accelerating data retrieval.",
          "Implemented tracing and performance logs across 100+ connected images, improving debugging, monitoring, and overall system observability.",
        ],
        conectae: [
          "Developed and sold a Learning Management System (LMS) to a university.",
          "Built a complete system including classes, notes, and student management.",
          "Enhanced memory efficiency in the React Native mobile app, enabling message lists to run at 60 FPS even on older devices, improving accessibility.",
          "Expanded the platform by implementing a React Native mobile app to attract new students.",
          "Ensured high availability and performance, making the platform suitable for academic use.",
        ],
        supergeeks: [
          "Recorded technical classes on mobile and web development, covering Rails API, Rails Fullstack, React with Redux Toolkit, Context API, Zustand, and Grafana.",
          "Trained developers in best practices for architecture, ensuring performance optimization and scalability.",
          "Mentored developers to prevent performance bottlenecks, improving their ability to design scalable applications.",
        ],
        freelancer: [
          "Developed a custom LMS platform from scratch, handling architecture, backend, and frontend implementation.",
          "Built IoT and vision processing solutions for farms, optimizing agricultural processes with automation.",
          "Integrated payment systems and stock management for an e-commerce platform, ensuring seamless transactions.",
          "Worked on multiple projects, delivering scalable and efficient software solutions across different industries.",
          "Developed numerous projects using Rails and WordPress, creating landing pages and management systems for various clients.",
        ],
      },
    },
    skillsSection: {
      title: "Skills",
      subtitle: "My Technical Expertise",
      categories: {
        programmingLanguages: "Programming Languages",
        frameworksLibraries: "Frameworks & Libraries",
        databasesStorage: "Databases & Storage",
        cloudDevOps: "Cloud & DevOps",
        performanceObservability: "Performance & Observability",
      },
      years: {
        singular: "year",
        plural: "years",
      },
    },
    educationSection: {
      title: "Education",
      subtitle: "My Academic Background",
      mba: {
        title: "MBA FULLCYCLE SOFTWARE ARCHITECTURE",
        period: "Jan 2023 - Dec 2024",
        description:
          "I completed an MBA in FullCycle Software Architecture, receiving training from instructors working at top tech companies like MongoDB, Google, Meta, Itaú, and Mercado Livre. The program covered advanced technologies such as Golang, Next.js, NestJS, RabbitMQ, DDD, Event-Driven Architecture, Hexagonal Architecture, Docker, Kubernetes, Kafka, Microservices, and Design Systems. I also gained expertise in working with both relational and non-relational databases. The focus was on performance optimization, cost reduction, scalability, and building resilient systems. Additionally, I mastered observability tools like Grafana, Datadog, and New Relic for real-time tracing and analytics to drive data-driven decision-making.",
        modules: {
          solutionsArchitecture: {
            title: "01. Solutions Architecture",
            items: [
              "Solution Architecture Fundamentals",
              "System Design and Design Docs",
              "Databases",
              "Apache Kafka",
              "Cloud Computing and Serverless",
              "Edge Computing",
            ],
          },
          softwareArchitecture: {
            title: "02. Software Architecture",
            items: [
              "Software Architecture Fundamentals",
              "Domain Driven Design",
              "SOLID and Design Patterns",
              "Hexagonal & Clean Architecture",
              "Microservices and Event-Driven Architecture",
            ],
          },
          devops: {
            title: "03. DevOps and SRE",
            items: [
              "Containers and Kubernetes",
              "DevOps and SRE Fundamentals",
              "Infrastructure as Code",
              "Observability",
            ],
          },
          softSkills: {
            title: "04. Soft Skills",
            items: [
              "Leadership and Teamwork",
              "Personal Marketing",
              "Entrepreneurship",
            ],
          },
        },
      },
    },
    awardsSection: {
      title: "Awards",
      subtitle: "Recognitions & Achievements",
      rookieAward: {
        title: "ROOKIE ALL STAR FIRST ROBOTICS COMPETITION IN USA",
        year: "2019",
        description:
          "Best Rookie Project – As the team leader, I programmed the robot and led the entire process, from software development to hardware integration, ensuring seamless collaboration between the programming and mechanics teams. Thanks to our efforts, we defeated a NASA team and won the Best Rookie Team award in Little Rock, Arkansas regional. This victory secured us a spot in the World Robotics Championship in Houston, Texas. We ranked 28th out of nearly 8,000 teams, showcasing our innovation and technical excellence on a global scale.",
      },
    },
    contactSection: {
      title: "Contact Me",
      subtitle: "Get In Touch",
      letsTalk: {
        title: "Let's Talk",
        description:
          "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
      },
      contactInfo: {
        email: {
          title: "Email",
          value: "juliovianadev@gmail.com",
        },
        phone: {
          title: "Phone",
          value: "+55 12 98805-3918",
        },
        location: {
          title: "Location",
          value: "Curitiba, Paraná, Brazil",
        },
      },
      form: {
        name: {
          label: "Name",
          placeholder: "Your name",
        },
        email: {
          label: "Email",
          placeholder: "Your email",
        },
        subject: {
          label: "Subject",
          placeholder: "Subject",
        },
        message: {
          label: "Message",
          placeholder: "Your message",
        },
        submit: {
          default: "Send Message",
          sending: "Sending...",
        },
        success: {
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        },
      },
    },
  },
  "pt-BR": {
    about: "Sobre",
    experience: "Experiência",
    skills: "Habilidades",
    education: "Educação",
    awards: "Prêmios",
    contact: "Contato",
    hero: {
      greeting: "Olá, me chamo",
      role: "Desenvolvedor Full Stack",
      description:
        "Eu construo experiências digitais excepcionais que causam impacto.",
      cta: "Entre em contato",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      made: "Feito com",
      by: "por",
    },
    aboutSection: {
      title: "Sobre Mim",
      subtitle: "Meu Resumo Profissional",
      description:
        "Comecei a programar há 12 anos e trabalho como desenvolvedor há 8 anos. Participei de competições de robótica nos EUA, onde ganhei prêmios. Atualmente, sou um Desenvolvedor Full-Stack focado em otimizar o desempenho de APIs para lidar com milhões de requisições.",
      cards: {
        performance: {
          title: "Otimização de Performance",
          description:
            "Reduzi o uso de CPU de 92% para 18% e melhorei a capacidade de processamento de requisições em até 42x.",
        },
        fullstack: {
          title: "Desenvolvimento Full-Stack",
          description:
            "Experiência em construir sistemas completos com React, React Native, Ruby on Rails e mais.",
        },
        architecture: {
          title: "Arquitetura de Sistemas",
          description:
            "Experiência em microsserviços, arquitetura orientada a eventos e design de sistemas escaláveis.",
        },
        robotics: {
          title: "Robótica",
          description:
            "Liderou uma equipe de robótica para a vitória em competições internacionais, derrotando uma equipe da NASA.",
        },
      },
    },
    experienceSection: {
      title: "Experiência",
      subtitle: "Minha Jornada Profissional",
      roles: {
        srFullstack: "Senior Fullstack Developer",
        fullstack: "Fullstack Pleno/Sênior",
        midFullstack: "Fullstack Pleno",
        contentTeacher: "Professor de Conteúdo Pleno",
        freelancer: "Desenvolvedor Fullstack",
      },
      companies: {
        softwareHouse: "Software House",
        enterness: "Enterness Easychannel",
        conectae: "Desenvolvimento de Plataforma LMS Conectae",
        supergeeks: "SuperGeeks",
        freelancer: "Freelancer",
      },
      achievements: {
        softwareHouse: [
          "Desenvolvi e implementei um sistema de gerenciamento de projetos e times para uma empresa de software, garantindo eficiência e produtividade.",
          "Implementei um sistema de pagamento e gerenciamento de estoque para uma empresa de e-commerce, garantindo transações perfeitas e eficientes.",
          "Desenvolvi e implementei um sistema de monitoramento e alerta para garantir a disponibilidade e o desempenho dos serviços, garantindo uma experiência de usuário consistente e satisfatória.",
          "Arquitetei todo um sistema de Ia com automações e monitoramento para empresa no ramo de saúde, garantindo eficiência e produtividade.",
          "Resolvi problemas de performance utilizando sistemas distribuitos e refatoração para golang",
        ],
        enterness: [
          "Otimizei o desempenho da API para lidar com milhões de requisições, reduzindo o uso de CPU de 92% para 18%, diminuindo significativamente os custos de infraestrutura.",
          "Aumentei a capacidade de processamento de requisições em até 42x em alguns casos, garantindo que o sistema pudesse escalar eficientemente sob altas cargas de tráfego.",
          "Reduzi o tempo médio de geração de relatórios de 10 segundos para 210ms, melhorando a experiência do usuário e a responsividade do sistema.",
          "Refatorei consultas ao banco de dados e estratégias de cache para melhorar o desempenho geral do sistema, reduzindo a latência e acelerando a recuperação de dados.",
          "Implementei rastreamento e logs de desempenho em mais de 100 imagens conectadas, melhorando a depuração, monitoramento e observabilidade geral do sistema.",
        ],
        conectae: [
          "Desenvolvi e vendi um Sistema de Gestão de Aprendizagem (LMS) para uma universidade.",
          "Construí um sistema completo incluindo aulas, notas e gerenciamento de alunos.",
          "Melhorei a eficiência de memória no aplicativo móvel React Native, permitindo que listas de mensagens rodassem a 60 FPS mesmo em dispositivos mais antigos, melhorando a acessibilidade.",
          "Expandi a plataforma implementando um aplicativo móvel React Native para atrair novos alunos.",
          "Garanti alta disponibilidade e desempenho, tornando a plataforma adequada para uso acadêmico.",
        ],
        supergeeks: [
          "Gravei aulas técnicas sobre desenvolvimento mobile e web, cobrindo Rails API, Rails Fullstack, React com Redux Toolkit, Context API, Zustand e Grafana.",
          "Treinei desenvolvedores em melhores práticas de arquitetura, garantindo otimização de desempenho e escalabilidade.",
          "Mentorei desenvolvedores para prevenir gargalos de desempenho, melhorando sua capacidade de projetar aplicações escaláveis.",
        ],
        freelancer: [
          "Desenvolvi uma plataforma LMS personalizada do zero, lidando com arquitetura, backend e implementação frontend.",
          "Construí soluções de IoT e processamento de visão para fazendas, otimizando processos agrícolas com automação.",
          "Integrei sistemas de pagamento e gerenciamento de estoque para uma plataforma de e-commerce, garantindo transações perfeitas.",
          "Trabalhei em múltiplos projetos, entregando soluções de software escaláveis e eficientes em diferentes indústrias.",
          "Desenvolvi diversos projetos utilizando Rails e WordPress, criando landing pages e sistemas de gestão para vários clientes.",
        ],
      },
    },
    skillsSection: {
      title: "Habilidades",
      subtitle: "Minha Expertise Técnica",
      categories: {
        programmingLanguages: "Linguagens de Programação",
        frameworksLibraries: "Frameworks & Bibliotecas",
        databasesStorage: "Bancos de Dados & Armazenamento",
        cloudDevOps: "Cloud & DevOps",
        performanceObservability: "Performance & Observabilidade",
      },
      years: {
        singular: "ano",
        plural: "anos",
      },
    },
    educationSection: {
      title: "Educação",
      subtitle: "Minha Formação Acadêmica",
      mba: {
        title: "MBA ARQUITETURA DE SOFTWARE FULLCYCLE",
        period: "Jan 2023 - Dez 2024",
        description:
          "Completei um MBA em Arquitetura de Software FullCycle, recebendo treinamento de instrutores que trabalham em grandes empresas de tecnologia como MongoDB, Google, Meta, Itaú e Mercado Livre. O programa abrangeu tecnologias avançadas como Golang, Next.js, NestJS, RabbitMQ, DDD, Arquitetura Orientada a Eventos, Arquitetura Hexagonal, Docker, Kubernetes, Kafka, Microsserviços e Design Systems. Também adquiri experiência em trabalhar com bancos de dados relacionais e não relacionais. O foco foi em otimização de performance, redução de custos, escalabilidade e construção de sistemas resilientes. Além disso, dominei ferramentas de observabilidade como Grafana, Datadog e New Relic para rastreamento em tempo real e análises para tomada de decisões baseadas em dados.",
        modules: {
          solutionsArchitecture: {
            title: "01. Arquitetura de Soluções",
            items: [
              "Fundamentos de Arquitetura de Solução",
              "System Design e Design Docs",
              "Bancos de Dados",
              "Apache Kafka",
              "Cloud Computing e Serverless",
              "Edge Computing",
            ],
          },
          softwareArchitecture: {
            title: "02. Arquitetura de Software",
            items: [
              "Fundamentos de Arquitetura de Software",
              "Domain Driven Design",
              "SOLID e Design Patterns",
              "Arquitetura Hexagonal & Clean Architecture",
              "Microsserviços e Arquitetura baseada a eventos",
            ],
          },
          devops: {
            title: "03. DevOps e SRE",
            items: [
              "Containers e Kubernetes",
              "Fundamentos de DevOps e SRE",
              "Infra as Code",
              "Observabilidade",
            ],
          },
          softSkills: {
            title: "04. Soft Skills",
            items: [
              "Liderança e Trabalho em Equipe",
              "Marketing Pessoal",
              "Empreendedorismo",
            ],
          },
        },
      },
    },
    awardsSection: {
      title: "Prêmios",
      subtitle: "Reconhecimentos & Conquistas",
      rookieAward: {
        title: "ROOKIE ALL STAR FIRST ROBOTICS COMPETITION NOS EUA",
        year: "2019",
        description:
          "Melhor Projeto Rookie – Como líder da equipe, programei o robô e conduzi todo o processo, desde o desenvolvimento de software até a integração de hardware, garantindo uma colaboração perfeita entre as equipes de programação e mecânica. Graças aos nossos esforços, derrotamos uma equipe da NASA e ganhamos o prêmio de Melhor Equipe Rookie na regional de Little Rock, Arkansas. Esta vitória nos garantiu uma vaga no Campeonato Mundial de Robótica em Houston, Texas. Ficamos em 28º lugar entre quase 8.000 equipes, demonstrando nossa inovação e excelência técnica em escala global.",
      },
    },
    contactSection: {
      title: "Contato",
      subtitle: "Entre em Contato",
      letsTalk: {
        title: "Vamos Conversar",
        description:
          "Sinta-se à vontade para entrar em contato se estiver procurando um desenvolvedor, tiver uma pergunta ou apenas quiser se conectar.",
      },
      contactInfo: {
        email: {
          title: "Email",
          value: "juliovianadev@gmail.com",
        },
        phone: {
          title: "Telefone",
          value: "+55 12 98805-3918",
        },
        location: {
          title: "Localização",
          value: "Curitiba, Paraná, Brasil",
        },
      },
      form: {
        name: {
          label: "Nome",
          placeholder: "Seu nome",
        },
        email: {
          label: "Email",
          placeholder: "Seu email",
        },
        subject: {
          label: "Assunto",
          placeholder: "Assunto",
        },
        message: {
          label: "Mensagem",
          placeholder: "Sua mensagem",
        },
        submit: {
          default: "Enviar Mensagem",
          sending: "Enviando...",
        },
        success: {
          title: "Mensagem enviada!",
          description:
            "Obrigado pela sua mensagem. Entrarei em contato em breve.",
        },
      },
    },
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en-US");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
