import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.Modules.push(new InductionModuleItem("studies/module/induction"));
    this.Modules.push(new LaunchingCSModuleItem("studies/module/launching"));

    this.currentModule = this.Modules[1];
    this.dataService.currentModule = this.currentModule;
  }

  setCourse(data: CourseModuleItem){
    this.dataService.selectedCourse = data;
  }
}
