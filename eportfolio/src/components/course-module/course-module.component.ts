import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseModule } from 'src/data/courseModule';
import { DataService } from 'src/data/dataService';

let lastContent: HTMLElement;
let lastTab: HTMLElement;


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

@Component({
  selector: 'app-course-module',
  templateUrl: './course-module.component.html',
  styleUrls: ['./course-module.component.css'],
})
export class CourseModuleComponent implements OnInit, AfterViewInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked {
  course: CourseModule = <CourseModule>{};
  private subs!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
//    console.log("[CourseModuleComponent]: Constructor");

    if (
      !this.dataService.selectedCourse ||
      this.dataService.selectedCourse === undefined
    ) {
      this.router.navigate(['/studies'], {});
    } else {
      this.subs = this.route.params.subscribe((params) => {
        console.log("[CourseModuleComponent]: Params Subscription Changed");
        this.course = this.dataService.selectedCourse;
      });
    }
  }

  ngAfterViewChecked(): void {
  //  console.log("[CourseModuleComponent]: AfterViewChecked");

  }
  ngAfterContentChecked(): void {
    //console.log("[CourseModuleComponent]: AfterContentChecked");
  }
  ngAfterContentInit(): void {
    //console.log("[CourseModuleComponent]: AfterContentInit");
  }
  ngDoCheck(): void {
    //console.log("[CourseModuleComponent]: DoCheck");
  }

  ngAfterViewInit(): void {
    //console.log("[CourseModuleComponent]: AfterViewInit");

    var elm: HTMLElement;
    var tabAreas = document.querySelectorAll('div.tab-content');
    for (let index = 0; index < tabAreas.length; index++) {
      elm = tabAreas[index] as HTMLElement;
      elm.style.display = 'none';
    }

    var tabs = document.querySelectorAll('div.tab');
    for (let index = 0; index < tabs.length; index++) {
      elm = tabs[index] as HTMLElement;
      elm.addEventListener('click', switchTabs.bind(elm));
    }
  }

  ngOnChanges(){
    //console.log("[CourseModuleComponent]: OnChanges");
  }

  ngOnInit(): void {
    //console.log("[CourseModuleComponent]: OnInit");

    this.course = this.dataService.selectedCourse;
  }

  ngOnDestroy(): void {
    console.log("[CourseModuleComponent]: OnDestroy");

    if (this.subs) this.subs.unsubscribe();
  }
}
