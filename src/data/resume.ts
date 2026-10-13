export const profile = {
  name: "Axel Xavier Rolón",
  role: "Sr QA Analyst",
  location: "Berisso, Buenos Aires, Argentina",
  phone: "+54 221 511 1797",
  email: "axel.rolon@gmail.com",
  summary:
    "Senior QA Analyst with 15+ years of experience testing web, mobile, desktop, and backend systems across streaming, eCommerce, financial, media, entertainment, and emergency services.",
  languages: ["Spanish — native", "English — advanced"],
  education:
    "IT Systems — Universidad Nacional de La Plata, La Plata, Argentina (course year: 2008, incomplete)"
};

export const skills = [
  "API testing — Postman",
  "SQL & NoSQL — SSMS, Azure Cosmos DB, DynamoDB",
  "Performance testing — JMeter, k6",
  "Automation — Playwright, Selenium, Karate, Rest-Assured",
  "Test management — JIRA, Azure DevOps, Zephyr, TestRail, Xray, HP ALM",
  "Mobile testing — BrowserStack & real Android/iOS devices",
  "Git & GitHub",
  "JavaScript, TypeScript, Java",
  "Visual Studio Code, IntelliJ IDEA"
];

export const experience = [
  {
    company: "Globant",
    period: "Feb 2021 – Feb 2026",
    roles: [
      {
        title: "Sr QA Analyst — Internal AI POD Proof of Concept",
        period: "Sep 2025 – Nov 2025",
        details:
          `AI QA on an AI-assisted PoC team using and evaluating the company’s internal AI tools and IDE integrated agents. Proposed and successfully implementeda Playwright Test + Page Object Model + Cucumber on TypeScript for the frontend and a Karate API for the backend.

          It was a company initiative to consolidate all the training given on AI, we were gathered with the goal of creating a lost pets search & report app from scratch with one strict instruction: avoid any manual work, only use AI; we decide which ones and how to use them.
          From the trainings I already had an idea on mind: to design an agent that reads initial documentation such as project briefings, and come up with a Test Strategy; an agent that reads User Stories and extends the previous document and creates a Test Plan, and a last agent that takes this plan and creates the necessary files and code.
          But quickly I faced some major challenges:
          - Business analyst and developers ended up with different interpretations of the project briefings, casuing my agent to create unnecessary test cases and scenarios, and missing others.
          - All roles, including myself, ended up with different terms for the same concepts, causing my coding agent to make up element names and selectors that didn't exist.
          Since everyone was trying different AI tools on test environments, we didn't really have a coodinated and orchestrated approach (after all, it was everyone's first time using exclusively AI for all our work). 
          My proposed solution was to create a Data Dictionary that served as glossary of terms, as well as a list of all the elements and selectors that I could later use for my coding agent.
          After I had the automation solutions running, I made some refinements using coding assistants within VSCode: first I tried Cline, but it made a lot of mistakes..
          --correction: I was not unable to make the proper prompts to get the desired results :) (I remember a topic from the trainings: there's no bad AI, only bad prompts; assume your responsibility is to make the best prompts possible). 
          I ended up using GitHub copilot, which was much more effective and it's my preferred coding assistant now.

          Another lesson learned? also create agents to oversee your overall testing process! I trusted my experience over the years to carry out this task but forgot with AI the rules have changed: even my most brillant work can be even better in ways I never imagined.`,

        tags: ["Playwright", "TypeScript", "Cucumber", "Karate", "AI"]
      },
      {
        title: "Sr QA Analyst — ESPN Raptor (Disney)",
        period: "Apr 2024 – Aug 2025",
        details:
          `Planned and executed testing for a new streaming platform and the migration of legacy content scheduling systems to the SCTE-224 industry standard, focusing on API services and database validation across SQL and NoSQL databases, including Azure Cosmos DB.
          I joined the project only to have my "baptism by fire" (as we joked on the daily standups) the next week: the QA lead that hadn't finished training me yet left for a long vacation, and I had to take over for the next 6 weeks with deadlines already set. I had to quickly learn the project and its systems, successfully delivering the testing for the new platform as well as some production support tasks from the existing one.
          I contributed to this team with several documentation pages on the project Confluence space, as well as a fully automated Postman collection, which also served as handy testing tool for a very complex system that required freshly and uniquely designed API calls for each content item: no knowledge on API's or the system was required to use the collection, no data was needed to be entered manually, as it would generate valid data automatically and preserve state accross different calls ).
          
          This was one of my most both challenging and entertaining experiences, every bug required meticulous testing data design and end-to-end verification throughout multiple systems and layers, including web UI, API responses, NoSQL verification of posted messages to event queue, log verification of the processing, and SQL verification of created data. 
          Every catch was a good catch. Like the time a specific scenario, create then delete then quickly create again (a message to the event queue) would cause files to not get delivered when the UI showed successful deliver. It seemed like an edge case until we moved to staging environment and production-like data showed it would happen way more often than we expected
          
          Unfortunately, due to legal issues (Fubo filed an antitrust lawsuit against Disney) the app never saw the light of the day :(, but it will sure remain in my memory as a good one! `,
        tags: ["API", "Postman", "SQL", "NoSQL", "Azure Cosmos DB", "Streaming"]
      },
      {
        title: "Sr QA Analyst — Intrado PowerSchool",
        period: "Mar 2022 – Jan 2024",
        details:
          "Performed black-box testing of instant messaging applications for students, teachers, and parents using BrowserStack and physical devices, along with testing their web-based backend portals.",
        tags: ["Black-box", "BrowserStack", "Mobile", "Web"]
      },
      {
        title: "Sr QA Analyst — Intrado Emergency Gateway",
        period: "Feb 2021 – Mar 2022",
        details:
          "Tested a Linux-based backend application for Intrado’s E9-1-1 emergency location and call-routing services, validating APIs with Postman and verifying location and call data through SQL database queries. Created and executed k6 load scripts to reproduce and investigate backend issues.",
        tags: ["Linux", "Postman", "SQL", "k6", "Backend"]
      }
    ]
  },
  {
    company: "Hexacta",
    period: "May 2018 – Feb 2021",
    roles: [
      {
        title: "Sr QA Analyst — TechInsights",
        period: "Jan 2019 – Feb 2021",
        details:
          "Tested a web application for managing integrated circuit intellectual property and its backend services, collaborating with the automation team to add test cases to a company-developed Selenium Java and TestNG framework.",
        tags: ["Selenium", "Java", "TestNG", "Web"]
      },
      {
        title: "Sr QA Analyst — Axioma",
        period: "May 2018 – Dec 2018",
        details:
          "Tested a web-based portfolio management application across its UI and API services, using Postman for API testing.",
        tags: ["Web", "API", "Postman"]
      }
    ]
  },
  {
    company: "Globallogic",
    period: "Apr 2014 – May 2018",
    roles: [
      {
        title: "Sr QA Analyst — Digital River",
        period: "Mar 2016 – May 2018",
        details:
          `Tested the inventory and stock management services of an eCommerce platform provider. Collaborated with the SDET team on their Rest-Assured API automation solution, creating automated coverage for a feature owned within the QA role. This was a job experience that `,
        tags: ["eCommerce", "Rest-Assured", "API", "Automation"]
      },
      {
        title: "Ssr QA Analyst — Stellar",
        period: "Feb 2015 – Mar 2016",
        details:
          "Tested an iOS booking application for chartered flights using physical devices and iOS simulators through Xcode, performing black-box testing across different device configurations.",
        tags: ["iOS", "Xcode", "Mobile", "Black-box"]
      },
      {
        title: "Ssr QA Analyst — Invision",
        period: "Apr 2014 – Feb 2015",
        details:
          "Tested a desktop application for TV advertising scheduling and traffic management used by television networks.",
        tags: ["Desktop", "Media", "Testing"]
      }
    ]
  },
  {
    company: "BairesDev",
    period: "Feb 2013 – Apr 2014",
    roles: [
      {
        title: "Ssr QA Analyst — Clarín / AGEA S.A.",
        period: "May 2013 – Apr 2014",
        details:
          "Tested frontend/backend of a major local newspaper’s subscription system, providing production support and developing JMeter scripts to assist with live production data issues. Queried SAP Basis tables and functions to retrieve and validate subscription data, and used Selenium IDE to record automated tests within a company-developed Ruby framework.",
        tags: ["JMeter", "SAP", "Selenium IDE", "Ruby", "Backend"]
      },
      {
        title: "Ssr QA Analyst — DLA",
        period: "Feb 2013 – May 2013",
        details:
          "Tested DLA TV, a new streaming platform later rebranded as Claro Video, across mobile devices (iOS and Android), set-top boxes (STBs), and Smart TVs. First mobile and non-web project in the career, requiring learning and adapting to new testing strategies and tools.",
        tags: ["Streaming", "iOS", "Android", "STB", "Smart TV"]
      }
    ]
  },
  {
    company: "Globant",
    period: "Aug 2008 – Feb 2013",
    roles: [
      {
        title: "Jr QA Analyst — WDPRO (Disney)",
        period: "May 2012 – Feb 2013",
        details:
          "Worked both offshore and on-site at the client’s offices in Florida, collaborating directly with the client’s team while testing a new ticketing and booking platform across its web UI and backend services. Performed functional, regression, and exploratory testing with strong emphasis on UX/UI, responsiveness, accessibility, and cross-browser compatibility.",
        tags: ["Disney", "Web", "Booking", "UX/UI", "Cross-browser", "Accessibility"]
      },
      {
        title: "Jr QA Analyst — Conectar Igualdad / Educ.ar",
        period: "Jul 2011 – Mar 2012",
        details:
          "As the sole tester for an educational content application included in the netbooks distributed to students at public secondary schools as part of the Argentine government’s Conectar Igualdad program, developed and executed a comprehensive Test Plan, ensuring the project was delivered successfully and on schedule. At one point the project faced an unexpected challenge, there was no QA manager/leader and the company was under audits for ISO certifications, and being a junior tester I had to take on the responsibility of creating the project's required documentation and processes, including my first Test Plan, Test Cases, and Test Reports, while also performing the testing itself.",
        tags: ["Test planning", "Education", "Government", "Desktop"]
      },
      {
        title: "Jr Game Testing Test Lead — Electronic Arts",
        period: "Jan 2009 – Dec 2010",
        details:
          "Led local testing efforts for G.I. Joe, Mass Effect 2, Dragon Age: Origins, and The Sims 3 (consoles), serving as the primary point of contact for daily client communication, test planning, and reporting. Trained new hires as part of a ramp-up program onboarding approximately 20 testers per week, creating and revising training materials for company-wide use.",
        tags: ["EA", "Test Lead", "Mentoring", "Training",  "Game testing"]
      },
      {
        title: "Jr Game Tester — Electronic Arts",
        period: "Aug 2008 – Dec 2008",
        details:
          "Started career as a game tester for Scrabble and Command & Conquer: Red Alert 2, executing test cases from DevTest and reporting bugs through DevTrack.",
        tags: ["EA", "Game testing", "DevTrack", "DevTest"]
      }
    ]
  }
];

export const projects = [
  {
    name: "QA Automation Toolkit",
    description:
      "A portfolio space for showcasing practical UI and API automation examples, test architecture, reusable patterns and reporting.",
    stack: ["TypeScript", "Playwright", "API Testing"],
    href: "#"
  },
  {
    name: "Testing & Performance Lab",
    description:
      "Examples and experiments around API validation, SQL/NoSQL data validation and performance testing with JMeter and k6.",
    stack: ["Postman", "SQL", "JMeter", "k6"],
    href: "#"
  }
];