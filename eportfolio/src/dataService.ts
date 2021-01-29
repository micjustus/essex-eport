import { Injectable } from "@angular/core";
import { CourseModuleItem } from "./courseModule";

@Injectable()
export class DataService{
  selectedCourse!: CourseModuleItem;
}
