import { Artefact } from "./Artefact";
import { Reflection } from "./Reflection";
import { TeamNote } from "./TeamNote";

export class ModuleUnit{
  public title!: string;
  public description!: string;
  public outcome?: string;
  public startDate?: Date;
  public endDate?: Date
}

export class CourseModuleItem {

  public outcomes: string[] = [];
  public tasks: string[] = [];
  public artefacts: Artefact[] = [];
  public reflections: Reflection[] = [];
  public notes: TeamNote[] = [];
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
    public shortTitle: string,
    public longTitle: string,
    public path: string,
    public description: string = '',
    public imageUrl: string = '',
  ) {
    if (!this.imageUrl) this.imageUrl = "../assets/images/essex_logo.png";
  }
}
