import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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

  constructor(private http: HttpClient){}

  public loadFromUrl(path: string): Observable<string>{
    return this.http.get(path, { responseType:'text'})
    .pipe(map(data=> {
      console.log("Got data=> " + data);
    return data;
    }));
  }

  public loadFromUrlPromise(path: string): Promise<string>{
    return this.http.get(path, { responseType:'text'}).toPromise();
  }

  public get tutors(): Tutor[]{
    let res: Tutor[] =[];

    this.modules.forEach((mod, idx)=>{
      res.push(mod.tutor);
    });

    return res;
  }
}
