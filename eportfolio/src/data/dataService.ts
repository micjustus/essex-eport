import { Injectable } from "@angular/core";
import { CourseModuleItem } from "./courseModule";
import { Reflection } from "./Reflection";

@Injectable()
export class DataService{
  selectedCourse!: CourseModuleItem;
  selectedWriting!: Reflection;
  currentModule!: CourseModuleItem;
}
