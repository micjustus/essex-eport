import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CourseModuleItem } from 'src/data/courseModule';


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
  @Input() modules!: CourseModuleItem[];
  @Output() moduleSelected: EventEmitter<{
    item: CourseModuleItem;
    index: number;
  }> = new EventEmitter<{ item: CourseModuleItem; index: number }>();

  constructor() {}

  ngAfterViewInit(){
    var nodes = document.querySelectorAll('.opener');

    for(let  index=0;index<nodes.length;index++){
      let val = nodes[index];

      val.addEventListener('click', () => {
        if (val.classList.contains('active'))
          val.classList.remove('active');
        else
          val.classList.add('active');

          // find the "collapsible" child
        // let val2 : HTMLElement = val as HTMLElement;
        // setElemHeight(val2);

        let content = val.nextElementSibling;
        if (content)
          setElemHeight(content as HTMLElement);
      });
    }

  }

  ngOnInit(): void {
    // we want to handle clicks on "collapsible" thingies
  }

  select(value: CourseModuleItem, index: number) {
    console.log('module has been selected. Emit an event');

    this.moduleSelected.emit({
      item: value,
      index: index,
    });
  }
}

function collapse(ev: Event) {}
