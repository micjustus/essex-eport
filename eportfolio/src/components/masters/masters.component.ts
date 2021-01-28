import { Component, OnInit } from '@angular/core';
import { CourseModule } from 'src/courseModule';

@Component({
  selector: 'app-masters.component',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  Modules: CourseModule[] = [];

  constructor() { }

  ngOnInit(): void {
    this.Modules.push(new CourseModule("Induction"));
    this.Modules.push(new CourseModule("Launching into Computer Science"));
  }
}
