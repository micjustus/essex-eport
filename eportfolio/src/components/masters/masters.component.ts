import { Component, OnInit } from '@angular/core';
import { CourseModule } from 'src/data/courseModule';
import { DataService } from 'src/data/dataService';
import { Tutor } from 'src/data/tutor';



@Component({
  selector: 'app-masters.component',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  public currentModule: CourseModule = <CourseModule>{};

  constructor (private dataService: DataService){}

  ngOnInit(){
    this.currentModule = this.dataService.currentModule;
  }

  public get tutors(): Tutor[] {
    return this.dataService.tutors;
  }
}
