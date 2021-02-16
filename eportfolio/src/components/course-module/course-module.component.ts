import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class CourseModuleComponent implements OnInit, AfterViewInit {
  course: CourseModule = <CourseModule>{};
  private subs!: Subscription;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
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

  ngOnInit(): void {
    this.course = this.dataService.selectedCourse;
  }

  ngOnDestroy(): void {
    if (this.subs) this.subs.unsubscribe();
  }
}
