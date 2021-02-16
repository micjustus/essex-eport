import { Artefact } from "./Artefact";
import { ModuleUnit } from "./ModuleUnit";
import { Reflection } from "./reflection";
import { TeamNote } from "./TeamNote";
import { Tutor } from "./tutor";


export class CourseModule {
  public outcomes: string[] = [];
  public tasks: string[] = [];
  public artefacts: Artefact[] = [];
  public reflections: Reflection[] = [];
  public notes: TeamNote[] = [];
  public units: ModuleUnit[] =[];
  public progress: number = 0;
  public tutor: Tutor =<Tutor>{};

  public _moduleIndex: number = 0;

  public get currentUnit(): ModuleUnit {
    return this.units[this._moduleIndex];
  }

  public set currentUnitIndex(value:number){
    this._moduleIndex = value;
    this.progress = (this._moduleIndex/this.units.length)*100;
  }

  constructor(
    public id: number,
    public shortTitle: string,
    public longTitle: string,
    public description: string = '',
    public imageUrl: string = '',
  ) {
    if (!this.id) this.id = -1;
    if (!this.imageUrl) this.imageUrl = "../assets/images/essex_logo.png";
  }
}
