import { Injectable } from "@angular/core";
import { Artefact } from "./Artefact";
import { CourseModule } from "./courseModule";
import { Tutor } from "./tutor";

@Injectable()
export class DataService{
  selectedCourse!: CourseModule;
  selectedWriting!: Artefact;
  currentModule!: CourseModule;
  modules: CourseModule[] = [];
  writings: Artefact[] = [];

  public get tutors(): Tutor[]{
    let res: Tutor[] =[];

    this.modules.forEach((mod, idx)=>{
      res.push(mod.tutor);
    });

    return res;
  }
}
