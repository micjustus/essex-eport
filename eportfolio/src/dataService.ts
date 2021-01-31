import { Injectable } from "@angular/core";
import { Reflection } from "./components/masters/Reflection";
import { CourseModuleItem } from "./courseModule";

@Injectable()
export class DataService{
  selectedCourse!: CourseModuleItem;
  selectedWriting!: Reflection;
}
