import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModuleItem } from 'src/courseModule';
import { DataService } from 'src/dataService';
import { InductionModuleItem } from '../masters/InductionModuleItem';
import { LaunchingCSModuleItem } from '../masters/LaunchingCSModuleItem';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  Modules: CourseModuleItem[] = [];
  @Input() currentModule!: CourseModuleItem;

  constructor(
    private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.Modules.push(new InductionModuleItem("studies/module/induction"));
    this.Modules.push(new LaunchingCSModuleItem("studies/module/launching"));

    this.currentModule = this.Modules[1];
    this.dataService.currentModule = this.currentModule;
  }

  activateCourse(v: { item: CourseModuleItem, index: number}){
    this.dataService.selectedCourse = v.item;
    this.router.navigate(["studies/module", v.index]);
  }

  setCourse(data: CourseModuleItem){
    this.dataService.selectedCourse = data;
  }
}

