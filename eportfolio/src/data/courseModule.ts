import { artefact } from "./artefact";
import { ModuleUnit } from "./moduleUnit";
import { Reflection } from "./reflection";
import { TeamNote } from "./teamNote";
import { Tutor } from "./tutor";

export class CourseModule {

  public outcomes: string[] = [];
  public tasks: string[] = [];
  public artefacts: artefact[] = [];
  public reflections: Reflection[] = [];
  public notes: TeamNote[] = [];
  public units: ModuleUnit[] =[];
  public progress: number = 0;
  public tutor: Tutor =<Tutor>{};

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
