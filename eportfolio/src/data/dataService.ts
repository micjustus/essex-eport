import { Injectable } from "@angular/core";
import { MenuItem } from "src/components/studies/studies.component";
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
  menuItems!: MenuItem[];

  public get tutors(): Tutor[]{
    let res: Tutor[] =[];

    this.modules.forEach((mod, idx)=>{
      res.push(mod.tutor);
    });

    return res;
  }
}
