import { CourseModuleItem } from 'src/courseModule';

export class LaunchingCSModuleItem extends CourseModuleItem {
  constructor(path: string) {
    super("Launching into Computer Science", "", path);

    this.Description =  "This module deals with aspects of computer scientists such as their roles and ethical responsibilities, computer architectures, data structures, computational algorithms and encouraging of on-going professional development.";

    this.Tasks = [
      "Roles, skillsets, ethical responsibilities",
      "Computing architectures, practices, applications, data structures",
      "Computational theories and programming concepts",
      "Apply efficient algorithms and programming practices",
      "Professional development regarding threats, securities and global impacts"
    ]

    this.Outcomes = [
      "Identify and explain the architecture, structure and functionality of basic components of computer system",
      "Demonstrate a critical understanding of core data structures and programming concepts, including algorithm computability",
      "Critically evaluate the functionality of different types of software, i.e., operating system, utility programs, languages and applications",
      "Critically appraise the emerging trends in the field, such as cloud computing, big data, cyber security, and the professional and ethical requirements for dealing with such contemporary computer-based technologies"
    ]

    this.units = [
      { Title: "Unit 1", Description: "Computer Scientist Roles and Responsibilites" },
      { Title: "Unit 2", Description: "Computer Hardware" },
      { Title: "Unit 2", Description: "Computer Hardware" },
      { Title: "Unit 2", Description: "Computer Hardware" },
      { Title: "Unit 2", Description: "Computer Hardware" },
      { Title: "Unit 2", Description: "Computer Hardware" },
      { Title: "Unit 2", Description: "Computer Hardware" },
      { Title: "Unit 2", Description: "Computer Hardware" },
      { Title: "Unit 2", Description: "Computer Hardware" },
      { Title: "Unit 2", Description: "Computer Hardware" },
      { Title: "Unit 2", Description: "Computer Hardware" },
      { Title: "Unit 2", Description: "Computer Hardware" }
    ]

    this.currentUnit = 1;
  }
}
