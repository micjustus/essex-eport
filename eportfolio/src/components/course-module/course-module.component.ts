import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModuleItem } from 'src/courseModule';
import { DataService } from 'src/dataService';
import { Reflection } from '../masters/Reflection';

let timeoutHandler: number | undefined;
let previousHighlight: Element;

function scrollFunc(): void {
  if (timeoutHandler) return;

  timeoutHandler = window.setTimeout(checkHeadings, 20);
}

function checkHeadings(): void {
  var toc = document.querySelector('#toc');
  var elms = toc?.getElementsByClassName('.nav-link');
  if (!elms || !elms?.length) return;

  var smallest = -1;
  var menuItem: Element | undefined = undefined;

  for (var index = 0; index < elms?.length; index++) {
    var elm = elms[index] || null;
    if (!elm) continue;

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

  window.clearTimeout(timeoutHandler);
  timeoutHandler = undefined;
}

// This is the important part!

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
    checkHeadings();
  }

  ngOnDestroy(): void {
    document.removeEventListener('scroll', scrollFunc);
  }

  setPiece(writing: Reflection){
    this.dataService.selectedWriting = writing;
  }

  setElemHeight(evt: Event, id:string){
    //evt.preventDefault();

    var elm = document.getElementById(id);
    if (!elm) return;

    var first = elm.hasAttribute("data-collapsed");
    var collapsed =  elm.getAttribute("data-collapsed") == 'true';
    console.log("collapsed state=" + collapsed);

    if (!first || collapsed){
      var height = elm?.scrollHeight;
      elm.style.height = height + "px";
      elm.style.opacity='1';
      elm.setAttribute("data-collapsed", 'false');
    } else{
      elm.style.height='0';
      elm.style.opacity='0';
      elm.setAttribute("data-collapsed", 'true');
    }
  }
}
