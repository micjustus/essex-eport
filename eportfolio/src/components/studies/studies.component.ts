import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModule } from 'src/data/courseModule';
import { DataService } from 'src/data/dataService';
import { InductionModuleItem } from 'src/data/moduleInduction';
import { LaunchingCSModuleItem } from 'src/data/moduleLaunchingCS';

export interface MenuItem{
  title:string;
  id?: number;
  URL?:string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {

  constructor(
    private router: Router,
    private dataService: DataService) {
      this.dataService.modules = [];  // make sure it's empty

      this.dataService.modules.push(new InductionModuleItem(1));
      this.dataService.modules.push(new LaunchingCSModuleItem(2));

      this.dataService.currentModule = this.dataService.modules[1];
      this.dataService.menuItems = this.buildSidebarItems;
    }

  public get buildSidebarItems(){
    // returns a tree-like structure for the sidebar based on our modules
    // we obviously want to abstract the sidebar away from modules

    var menu: MenuItem[] = [];
    this.dataService.modules.forEach((val, idx)=>{
      menu.push({
          id: val.id,
          title: val.shortTitle,
          URL: "/studies/module/" + val.id,
          // children: [
          //   { id: val.id, title: "Overview" },
          //   { id: val.id, title: "Writings", URL: "#writings"}
          // ]
        });
      });


    return [
        { title : "MSc Computer Science", URL: "/"},
        { title: "Course Overview", URL: "/studies" },
        { title: "Modules", children: menu },
        { title: "Writings", URL: "/studies/writings" }
    ];
  }

   public get modules(): CourseModule[]{
    return this.dataService.modules;
  }

  select(item: MenuItem){

    let module = this.dataService.modules.find(val=>{
      return val.id == item.id? val: undefined;
    });

    if (module){
      this.dataService.selectedCourse = module;
      this.router.navigate([item.URL]);
    }
  }
}

