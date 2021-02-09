import { Injectable } from "@angular/core";
import { CourseModule } from "./courseModule";
import { Reflection } from "./reflection";
import { Tutor } from "./tutor";

@Injectable()
export class DataService{
  selectedCourse: CourseModule = <CourseModule>{};
  selectedWriting: Reflection = <Reflection>{};
  currentModule: CourseModule = <CourseModule>{};
  modules: CourseModule[] = [];

  public get tutors(): Tutor[]{
    let res: Tutor[] =[];

    this.modules.forEach((mod, idx)=>{
      res.push(mod.tutor);
    });

    return res;
  }
}
