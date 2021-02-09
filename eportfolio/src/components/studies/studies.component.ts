import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModule } from 'src/data/courseModule';
import { DataService } from 'src/data/dataService';
import { InductionModuleItem } from 'src/data/moduleInduction';
import { LaunchingCSModuleItem } from 'src/data/moduleLaunchingCS';


@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.modules.push(new InductionModuleItem("studies/module/induction"));
    this.dataService.modules.push(new LaunchingCSModuleItem("studies/module/launching"));

    this.dataService.currentModule = this.dataService.modules[1];
  }

  public get modules(): CourseModule[]{
    return this.dataService.modules;
  }

  activateCourse(v: { item: CourseModule, index: number}){
    this.dataService.selectedCourse = v.item;
    this.router.navigate(["studies/module", v.index]);
  }

  setCourse(data: CourseModule){
    this.dataService.selectedCourse = data;
  }
}

