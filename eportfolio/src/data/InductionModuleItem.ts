import { CourseModuleItem } from "./courseModule";


export class InductionModuleItem extends CourseModuleItem {

  constructor(path: string) {
    super("Induction into Computer Science", "", path);

    this.Description = "This module introduces candidates into the concept of online study and familiarises students with " +
    "the requirements of academic study. Concepts such as plagiarism are addressed as well as academic research and writing.";

    this.Outcomes = [
      "Become familiar with research of academic sources",
      "Understand the role of academic integrity and plagiarism",
      "Understand the requirements of online study"
    ]

    this.Artefacts = [
      {
        Type: "PDF",
        Title: "Induction Assignment",
        Description: "A 750-word essay discussing the role of Computer Science. The essay demonstrates academic competency to reference and a command of the English language.",
        URL: "./artefacts/01.M1Induction_Assignment.pdf"
      }
    ]

    this.Reflections = [
      {
        Title: "Plagiarism",
        Description: "In this short article, I reflect on my understanding of plagiarism before and after the induction module.",
        URL: "reflections",
        Content: "plagiarism.md"
      },

      {
        Title: "Understanding Computer Science",
        Description: "My reflections on how my work experience helped to confirm research for the induction assignment.",
        URL: "reflections",
        Content: "understanding-cs.md"
      },

      {
        Title: "e-Portfolios",
        Description: "In this short article I reflect on the concept of <strong>e-portfolios</strong> and the thoughts and opinions of fellow students.",
        URL: "reflections",
        Content: "eportfolios.md"
      },

    ]
  }
}
