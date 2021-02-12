import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseModule } from 'src/data/courseModule';
import { DataService } from 'src/data/dataService';

let timeoutHandler: number | undefined;
let previousHighlight: Element;
let lastContent: HTMLElement;
let lastTab: HTMLElement;

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

function switchTabs(this: HTMLElement, ev: MouseEvent): void {
  var content = document.getElementById('tab-' + this.id);
  if (!content) return;

  if (lastContent) {
    lastContent.style.display = 'none';
  }

  if (lastTab) {
    lastTab.classList.remove('focus');
  }

  this.classList.add('focus');
  lastTab = this;

  content.style.display = 'block';
  lastContent = content;
}

function initAccordion2() {
  const items = document.querySelectorAll(".accordion2 .xxxx");

  function toggleAccordion2() {
    const itemToggle = this.getAttribute("aria-expanded");

    let body: HTMLElement;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      item.setAttribute("aria-expanded", "false");

      body = item.querySelector(".accordion__item .accordion-header") as HTMLElement;
      body.classList.remove("active");

      body = item.querySelector("div.accordion-body") as HTMLElement;
      body.style.height='0';
      body.style.overflow="hidden";

      body = item.querySelector(".accordion-header") as HTMLElement;
      body.classList.remove("active");
    }

    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");

      body = this.querySelector(".accordion__item .accordion-header") as HTMLElement;
      body.classList.add("active");

      body = this.querySelector("div.accordion-body") as HTMLElement;

      var height = body.scrollHeight;
      body.style.height = height + "px";

    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion2));
}
@Component({
  selector: 'app-course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.css'],
})
export class CourseModuleComponent implements OnInit, AfterViewInit {
  course: CourseModule = <CourseModule>{};
  private subs!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    if (
      !this.dataService.selectedCourse ||
      this.dataService.selectedCourse === undefined
    ) {
      this.router.navigate(['/studies'], {});
    } else {
      this.subs = this.route.params.subscribe((params) => {
        this.course = this.dataService.selectedCourse;
      });
    }
  }

  ngAfterViewInit(): void {
    var tabAreas = document.querySelectorAll('div.tab-content');
    for (let index = 0; index < tabAreas.length; index++) {
      var elm = tabAreas[index] as HTMLElement;
      elm.style.display = 'none';
    }

    var tabs = document.querySelectorAll('div.tab');
    for (let index = 0; index < tabs.length; index++) {
      var elm = tabs[index] as HTMLElement;
      elm.addEventListener('click', switchTabs.bind(elm));
    }

    initAccordion2();
  }

  ngOnInit(): void {
    this.course = this.dataService.selectedCourse;
    checkHeadings();
  }

  ngOnDestroy(): void {
    if (this.subs) this.subs.unsubscribe();
    document.removeEventListener('scroll', scrollFunc);
  }

  setElemHeight(evt: Event, id: string) {
    //evt.preventDefault();

    var elm = document.getElementById(id);
    if (!elm) return;

    var first = elm.hasAttribute('data-collapsed');
    var collapsed = elm.getAttribute('data-collapsed') == 'true';

    if (!first || collapsed) {
      var height = elm?.scrollHeight;
      elm.style.height = height + 'px';
      elm.style.opacity = '1';
      elm.setAttribute('data-collapsed', 'false');
    } else {
      elm.style.height = '0';
      elm.style.opacity = '0';
      elm.setAttribute('data-collapsed', 'true');
    }
  }
}
