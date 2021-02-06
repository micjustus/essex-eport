import { Artefact } from "./components/masters/Artefact";
import { Reflection } from "./components/masters/Reflection";
import { TeamNote } from "./components/masters/TeamNote";

export class ModuleUnit{
  public Title!: string;
  public Description!: string;
  public Outcome?: string;
  public StartDate?: Date;
  public EndDate?: Date
}

export class CourseModuleItem {

  public Outcomes: string[] = [];
  public Tasks: string[] = [];
  public Artefacts: Artefact[] = [];
  public Reflections: Reflection[] = [];
  public Notes: TeamNote[] = [];
  public units!: ModuleUnit[];
  public progress: number = 0;
  public _moduleIndex: number = 0;

  public get current(): ModuleUnit {
    return this.units[this._moduleIndex];
  }

  public set currentUnit(value:number){
    this._moduleIndex = value;
    this.progress = (this._moduleIndex/this.units.length)*100;
  }

  constructor(
    public Title: string,
    public Description: string,
    public path: string,
    public imageUrl: string = ''
  ) {
    if (!this.imageUrl) this.imageUrl = "../assets/images/essex_logo.png";
  }
}
