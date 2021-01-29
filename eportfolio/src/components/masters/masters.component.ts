import { Component, OnInit } from '@angular/core';
import { CourseModuleItem } from 'src/courseModule';
import { DataService } from 'src/dataService';

const MODULE_ROOT: string = "modules/";

@Component({
  selector: 'app-masters.component',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  Modules: CourseModuleItem[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.Modules.push(new CourseModuleItem("Induction", MODULE_ROOT + "induction", "", "../assets/images/essex_logo.png"));
    this.Modules.push(new CourseModuleItem("Launching into Computer Science", MODULE_ROOT + "launching", "", "../assets/images/essex_logo.png"));
  }

  setCourse(data: CourseModuleItem){
    this.dataService.selectedCourse = data;
  }
}
