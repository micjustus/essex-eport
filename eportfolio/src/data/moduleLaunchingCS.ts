import { CourseModule } from "./courseModule";

export class LaunchingCSModuleItem extends CourseModule {
  constructor(path: string) {
    super("Launching", "Launching into Computer Science", path);

    this.tutor = { name:'Nawaz Khan', course:"Launching into computer Science", profilePicture:"Nawaz Khan.jpg", bibliography:"#"};

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
      { title: "Unit 1", description: "Responsibilities and Challenges" },
      { title: "Unit 2", description: "Computer Architecture" },
      { title: "Unit 3", description: "Emerging Trends in Computer Science", content: "Hello there New Trends. Such a trendsettah!"},
      { title: "Unit 4", description: "Computing Infrastructure and Network" },
      { title: "Unit 5", description: "Software as a Tool - Functionality and Development Methodologies" },
      { title: "Unit 6", description: "System Software – Operating Systems" },
      { title: "Unit 7", description: "Data Abstraction" },
      { title: "Unit 8", description: "Algorithms and Basic Programming Concepts" },
      { title: "Unit 9", description: "Solving Problems Using Python" },
      { title: "Unit 10", description: "Data Representation using Database Concepts" },
      { title: "Unit 11", description: "Advanced SQL" },
      { title: "Unit 12", description: "Research Topics in Computer Science – Data Science, AI and Standards" }
    ]

    this.currentUnitIndex = 1;
  }
}
