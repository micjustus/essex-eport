import { Reflection } from "./reflection";
import { CourseModule } from "./courseModule";

export class  ModuleWriting {
  public module!: CourseModule;
  public writing!: Reflection;
  public title!: string;
  public description!: string;
  public URL?: string;

  // public get title(): string { return this.writing.title; }
  // public get description(): string  { return this.writing.description; }
}
