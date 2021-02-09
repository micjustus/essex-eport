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
      { title: "Unit 1", description: "Computer Scientist Roles and Responsibilites" },
      { title: "Unit 2", description: "Computer Hardware" },
      { title: "Unit 3", description: "Computer Hardware" },
      { title: "Unit 4", description: "Computer Hardware" },
      { title: "Unit 5", description: "Computer Hardware" },
      { title: "Unit 6", description: "Computer Hardware" },
      { title: "Unit 7", description: "Computer Hardware" },
      { title: "Unit 8", description: "Computer Hardware" },
      { title: "Unit 9", description: "Computer Hardware" },
      { title: "Unit 10", description: "Computer Hardware" },
      { title: "Unit 11", description: "Computer Hardware" },
      { title: "Unit 12", description: "Computer Hardware" }
    ]

    this.currentUnit = 1;
  }
}
