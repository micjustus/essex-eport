import { CourseModule } from "./courseModule";


export class InductionModuleItem extends CourseModule {

  constructor(id: number) {
    super(id, "Induction", "Induction into Computer Science");

    this.tutor = { name:'Vivian Edema', course:"Introduction to Online Learning", profilePicture:"vivian edema.png", bibliography:"https://online.essex.ac.uk/meet-our-tutors/"};

    this.description =
    "This module introduces candidates into the concept of online study and familiarises students with " +
    "the requirements of academic study. Concepts such as plagiarism are addressed as well as academic research and writing.";

    this.outcomes = [
      "Become familiar with research of academic sources",
      "Understand the role of academic integrity and plagiarism",
      "Understand the requirements of online study"
    ]

    this.artefacts = [
      {
        type: "PDF",
        title: "Induction Assignment",
        description: "A 750-word essay discussing the role of Computer Science. The essay demonstrates academic competency to reference and a command of the English language.",
        URL: "./artefacts/01.M1Induction_Assignment.pdf"
      }
    ]

    this.reflections = [
      {
        type: "Blog",
        title: "Plagiarism",
        description: "In this short article, I reflect on my understanding of plagiarism before and after the induction module.",
        author: "Michael Justus",
        published: "January 2021",
        URL: "/reflections",
        content: "m0_plagiarism.md"
      },

      {
        type: "Blog",
        title: "Understanding Computer Science",
        description: "My reflections on how my work experience helped to confirm research for the induction assignment.",
        author: "Michael Justus",
        published: "January 2021",
        URL: "/reflections",
        content: "understanding-cs.md"
      },

      {
        type: "Blog",
        title: "e-Portfolios",
        description: "In this short article I reflect on the concept of <strong>e-portfolios</strong> and the thoughts and opinions of fellow students.",
        author: "Michael Justus",
        published: "January 2021",
        URL: "/reflections",
        content: "m0_eportfolios.md"
      },

    ]
  }
}
