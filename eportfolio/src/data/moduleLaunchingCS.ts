import { CourseModule } from "./courseModule";

export class LaunchingCSModuleItem extends CourseModule {
  constructor(id: number) {
    super(id, "Launching", "Launching into Computer Science");

    this.tutor = { name:'Nawaz Khan', course:"Launching into computer Science", profilePicture:"Nawaz Khan.jpg", bibliography:"https://online.essex.ac.uk/kolbiography/doctor-nawaz-khan/"};

    this.description =  "This module deals with aspects of computer scientists such as their roles and ethical responsibilities, computer architectures, data structures, computational algorithms and encouraging of on-going professional development.";

    this.tasks = [
      "Roles, skillsets, ethical responsibilities",
      "Computing architectures, practices, applications, data structures",
      "Computational theories and programming concepts",
      "Apply efficient algorithms and programming practices",
      "Professional development regarding threats, securities and global impacts"
    ]

    this.outcomes = [
      "Identify and explain the architecture, structure and functionality of basic components of computer system",
      "Demonstrate a critical understanding of core data structures and programming concepts, including algorithm computability",
      "Critically evaluate the functionality of different types of software, i.e., operating system, utility programs, languages and applications",
      "Critically appraise the emerging trends in the field, such as cloud computing, big data, cyber security, and the professional and ethical requirements for dealing with such contemporary computer-based technologies"
    ]

    this.units = [
      { title: "Unit 1", description: "Responsibilities and Challenges", contentType: "", content: "assets/artefacts/m01_u1_summary.html" },
      { title: "Unit 2", description: "Computer Architecture", content: "assets/artefacts/m01_u2_summary.html" },
      { title: "Unit 3", description: "Emerging Trends in Computer Science", content: "assets/artefacts/m01_u3_summary.html"},
      { title: "Unit 4", description: "Computing Infrastructure and Network", content: "AAA" },
      { title: "Unit 5", description: "Software as a Tool - Functionality and Development Methodologies" },
      { title: "Unit 6", description: "System Software – Operating Systems", content: "BBB" },
      { title: "Unit 7", description: "Data Abstraction" },
      { title: "Unit 8", description: "Algorithms and Basic Programming Concepts" },
      { title: "Unit 9", description: "Solving Problems Using Python" },
      { title: "Unit 10", description: "Data Representation using Database Concepts" },
      { title: "Unit 11", description: "Advanced SQL" },
      { title: "Unit 12", description: "Research Topics in Computer Science – Data Science, AI and Standards" }
    ]

    this.reflections = [
      { type: "Blog", title: "Google AI Tools", description: "", URL: "/reflections", content: "m1_u3_google_ai.md", source: "Module 1/Unit 3" },
      { type: "Blog", title: "Google Translator", description: "", URL: "/reflections", content: "m1_u3_google_translator.md", source: "Module 1/Unit3" },

    ];

    this.currentUnitIndex = 1;
  }
}
