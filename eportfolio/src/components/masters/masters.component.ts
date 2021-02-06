import { Component, Input, OnInit } from '@angular/core';
import { CourseModuleItem } from 'src/courseModule';
import { DataService } from 'src/dataService';


@Component({
  selector: 'app-masters.component',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  @Input() currentModule!: CourseModuleItem;

  constructor (private dataService: DataService){}

  ngOnInit(){
    this.currentModule = this.dataService.currentModule;
  }

}
