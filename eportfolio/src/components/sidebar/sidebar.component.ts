import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CourseModule } from 'src/data/courseModule';


function setElemHeight(elm: HTMLElement) {
  if (!elm) return;

  var first = elm.hasAttribute('data-collapsed');
  var collapsed = elm.getAttribute('data-collapsed') == 'true';

  if (!first || collapsed) {
    var height = elm?.scrollHeight;
    elm.style.height = '';
    elm.style.opacity = '1';
    elm.setAttribute('data-collapsed', 'false');
  } else {
    elm.style.height = '0';
    elm.style.opacity = '0';
    elm.setAttribute('data-collapsed', 'true');
  }
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() modules!: CourseModule[];
  @Output() moduleSelected: EventEmitter<{
    item: CourseModule;
    index: number;
  }> = new EventEmitter<{ item: CourseModule; index: number }>();

  constructor() {}

  ngAfterViewInit(){
    var nodes = document.querySelectorAll('.collapsible ul.collapsible');
    for(let index=0;index<nodes.length;index++){
      var n = nodes[index] as HTMLElement;

       n.style.height='0';
       n.style.opacity='1';
    }

    nodes = document.querySelectorAll('.opener');
    for(let  index=0;index<nodes.length;index++){
      let val = nodes[index];

      val.addEventListener('click', () => {
        if (val.classList.contains('active'))
          val.classList.remove('active');
        else
          val.classList.add('active');

        let content = val.nextElementSibling;
        if (content)
          setElemHeight(content as HTMLElement);
      });
    }
  }

  ngOnInit(): void {
    // we want to handle clicks on "collapsible" thingies
  }

  select(value: CourseModule, index: number) {
    this.moduleSelected.emit({
      item: value,
      index: index,
    });
  }
}

function collapse(ev: Event) {}
