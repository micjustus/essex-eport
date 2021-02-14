import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit, AfterViewChecked, OnChanges {

  @Input() items: any[] = [];
  private elements!: NodeListOf<Element>;
  private initialize: boolean = true;
  private lastElement!: HTMLElement;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items.currentValue !== changes.items.previousValue) {
     this.initialize = true;
    }
  }

  ngOnInit(){

  }

  ngOnDestroy(): void {
    console.log("[AccordionComponent]: OnDestroy");
    this.closeAccordion();
  }

  ngAfterViewChecked(): void {
    if (this.initialize){
      console.log("[AccordionComponent]: Initialize required");
      this.closeAccordion();
      this.initAccordion2();
      this.initialize = false;
    }
  }

  toggleAccordion2(ev: Event) {
    let itemToggle = undefined;

    let elm = ev.currentTarget as HTMLElement; // this should be the '.accordion2 .xxxx' element
    if (elm) itemToggle = elm.getAttribute('aria-expanded') || "false";

    this.toggleAccordionItem(itemToggle, elm);
  }

  initAccordion2() {
    this.elements = document.querySelectorAll('.accordion2 .xxxx');
    console.log('Init Accordion. Count = ' + this.elements.length);

    this.elements.forEach(item =>
      item.addEventListener('click', this.toggleAccordion2.bind(this))
    );

    // let's run an initialization on the items
    this.elements.forEach(item => this.toggleAccordionItem('false', item as HTMLElement));
  }

  closeAccordion() {
    if (this.elements){
      console.log("Closed Accordion. Removed eventlistener");
      this.elements.forEach(item => item.removeEventListener('click', this.toggleAccordion2));
    }
  }

  toggleAccordionItem(
    itemToggle: string | undefined | null,
    elm: HTMLElement
  ): void {
    let body: HTMLElement;

    if (this.lastElement){
      this.lastElement.setAttribute("aria-expanded", "false");

      body = this.lastElement.querySelector(
        '.accordion__item .accordion-header'
      ) as HTMLElement;
      body.classList.remove('active');

      body = this.lastElement.querySelector('div.accordion-body') as HTMLElement;
      if (body){
        body.style.height = '0';
        body.style.overflow = 'hidden';
      }

      body =this.lastElement.querySelector('.accordion-header') as HTMLElement;
      body.classList.remove('active');

    }

    if (itemToggle == 'false') {
      elm.setAttribute('aria-expanded', 'true');

      body = elm.querySelector(
        '.accordion__item .accordion-header'
      ) as HTMLElement;
      body.classList.add('active');

      body = elm.querySelector('div.accordion-body') as HTMLElement;
      if (body){
        var height = body.scrollHeight;
        body.style.height = height + 'px';
      }

      this.lastElement = elm;
    }
  }
}
