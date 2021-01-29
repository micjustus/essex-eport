import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModuleItem } from 'src/courseModule';
import { DataService } from 'src/dataService';

@Component({
  selector: 'app-course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.css']
})
export class CourseModuleComponent implements OnInit {

  @Input() course!: CourseModuleItem;

  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.course = this.dataService.selectedCourse;
  }
}
