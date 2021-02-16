import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from 'src/data/dataService';
import { MenuItem } from '../studies/studies.component';


function setElemHeight(elm: HTMLElement) {
  if (!elm) return;

  var first = elm.hasAttribute('data-collapsed');
  var collapsed = elm.getAttribute('data-collapsed') == 'true';

  if (!first || collapsed) {
    elm.style.height = '';
    elm.style.opacity = '1';
    elm.style.padding='';
    elm.setAttribute('data-collapsed', 'false');
  } else {
    elm.style.height = '0';
    elm.style.opacity = '0';
    elm.style.padding = '0';
    elm.setAttribute('data-collapsed', 'true');
  }

  console.log("SetElemHeight");
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  items!: MenuItem[];

  @Output() itemSelected: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

  constructor(private dataService: DataService) {
    this.items = this.dataService.menuItems;
  }

  ngAfterViewInit(){
    let nodes = document.querySelectorAll('.collapsible');
    for(let index=0;index<nodes.length;index++){
      var n = nodes[index] as HTMLElement;

       n.style.height='0';
       n.style.opacity='1';
       n.style.padding='0';
    }

    nodes = document.querySelectorAll('#menu .opener');
    for(let  index=0;index<nodes.length;index++){
      let val = nodes[index];

      val.addEventListener('click', () => {
        if (val.classList.contains('active'))
          val.classList.remove('active');
        else
          val.classList.add('active');

        let content = val.nextElementSibling as HTMLElement;
        if (content)
          setElemHeight(content);
      });
    }
  }

  ngOnInit(): void {
  }

  select(value: MenuItem) {
    this.itemSelected.emit(value);
  }
}
