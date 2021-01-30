import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModuleItem } from 'src/courseModule';
import { DataService } from 'src/dataService';

let hasScrolled: boolean = false;
let timeoutHandler: number | undefined;
let previousHighlight: Element;
let checking: boolean = false;

function scrollFunc(): void {
  if (timeoutHandler) {
    console.log('skipped');
    return;
  }

  timeoutHandler = window.setTimeout(checkHeadings, 10);
}

function checkHeadings(): void {
  //if (!hasScrolled) return;

  var toc = document.querySelector('#toc');
  var elms = toc?.getElementsByClassName('.nav-link');
  if (!elms || !elms?.length) return;

  var smallest = -1;
  var menuItem: Element | undefined = undefined;

  for (var index = 0; index < elms?.length; index++) {
    var elm = elms[index];
    var attr = elm.getAttribute('nav-id');

    var div = document.getElementById(attr || '');
    if (!div) continue;

    var rect = div.getBoundingClientRect();
    if (rect.y < 0) continue;

    if (smallest == -1 || rect.y < smallest) {
      smallest = rect.y;
      menuItem = elm;
    }

    if (!menuItem) continue;

    if (previousHighlight) previousHighlight.classList.remove('active');
    previousHighlight = menuItem;

    menuItem.classList.add('active');
    break;
  }

  //hasScrolled = false;
  window.clearTimeout(timeoutHandler);
  timeoutHandler = undefined;
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

    hasScrolled = true;
    document.addEventListener('scroll', scrollFunc);
    // timeoutHandler = window.setInterval(checkHeadings, 100);
  }

  ngOnDestroy(): void {
    document.removeEventListener('scroll', scrollFunc);
    // window.clearInterval(timeoutHandler);
  }
}
