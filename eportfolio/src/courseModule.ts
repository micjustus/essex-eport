import { Artefact } from "./components/masters/Artefact";
import { Reflection } from "./components/masters/Reflection";
import { TeamNote } from "./components/masters/TeamNote";

export class CourseModuleItem {

  public Outcomes: string[] = [];
  public Tasks: string[] = [];
  public Artefacts: Artefact[] = [];
  public Reflections: Reflection[] = [];
  public Notes: TeamNote[] = [];

  constructor(
    public Title: string,
    public Description: string,
    public path: string,
    public imageUrl: string = ''
  ) {
    if (!this.imageUrl) this.imageUrl = "../assets/images/essex_logo.png";
  }
}
