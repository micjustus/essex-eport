import { Component, OnInit } from '@angular/core';
import { CourseModuleItem } from 'src/courseModule';
import { DataService } from 'src/dataService';
import { InductionModuleItem } from './InductionModuleItem';
import { LaunchingCSModuleItem } from './LaunchingCSModuleItem';

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
    this.Modules.push(new InductionModuleItem(MODULE_ROOT + "induction"));
    this.Modules.push(new LaunchingCSModuleItem(MODULE_ROOT + "launching"));
  }

  setCourse(data: CourseModuleItem){
    this.dataService.selectedCourse = data;
  }
}
