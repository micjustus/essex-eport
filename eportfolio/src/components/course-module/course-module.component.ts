import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModuleItem } from 'src/courseModule';
import { DataService } from 'src/dataService';

import scrollSpy from '@sidsbrmnn/scrollspy';

let hasScrolled: boolean = false;
let timeoutHandler: number | undefined;
let previousHighlight: Element;

function scrollFunc(): void {
  hasScrolled = true;
  console.log('scroll check warranted');
}

function checkHeadings(): void {
  if (!hasScrolled) return;

  // find the '.nav-link' closest to the top of the viewport
  var toc = document.querySelector('#toc');
  var elms = toc?.getElementsByClassName('.nav-link');
  console.log('found ' + elms?.length + ' elements to check');

  var smallest = -1;
  var menuItem: Element;

  if (elms) {
    for (var index = 0; index < elms?.length; index++) {
      var val = elms[index];
      var attr = val.getAttribute('s');

      var div = document.getElementById(attr || '');
      if (!div) continue;

      var rect = div.getBoundingClientRect();
      if (rect.y < 0) continue;

      if (smallest == -1 || rect.y < smallest) {
        smallest = rect.y;
        menuItem = val;
      }
    }

    if (menuItem) {
      if (previousHighlight) previousHighlight.classList.remove('active');
      menuItem.classList.add('active');

      previousHighlight = menuItem;
    }
  }
  hasScrolled = false;
}

@Component({
  selector: 'app-course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.css'],
})
export class CourseModuleComponent implements OnInit {
  @Input() course!: CourseModuleItem;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.course = this.dataService.selectedCourse;
    document.addEventListener('scroll', scrollFunc);
    timeoutHandler = window.setInterval(checkHeadings, 100);
  }

  ngOnDestroy(): void {
    document.removeEventListener('scroll', scrollFunc);
    window.clearInterval(timeoutHandler);
  }
}
