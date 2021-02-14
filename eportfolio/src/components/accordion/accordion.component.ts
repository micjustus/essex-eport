import {
  AfterViewChecked,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit, AfterViewChecked, OnChanges {
  @Input() items: any[] = [];
  private elements!: NodeListOf<Element>;
  private initialize: boolean = true;
  private lastElement!: HTMLElement;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.initialize = true;
    }
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    console.log('[AccordionComponent]: OnDestroy');
    this.closeAccordion();
  }

  ngAfterViewChecked(): void {
    if (this.initialize) {
      console.log('[AccordionComponent]: Initialize required');
      this.closeAccordion();
      this.initAccordion2();
      this.initialize = false;
    }
  }

  toggleAccordion2(ev: Event) {
    let itemToggle = undefined;

    let elm = ev.currentTarget as HTMLElement; // this should be the '.accordion2 .accordion__item' element
    if (elm) itemToggle = elm.getAttribute('aria-expanded') || 'false';

    this.toggleAccordionItem(itemToggle, elm);
  }

  initAccordion2() {
    this.elements = document.querySelectorAll('.accordion2 .accordion__item');
    this.elements.forEach((item) =>
      item.addEventListener('click', this.toggleAccordion2.bind(this))
    );

    // let's run an initialization on the items
    this.elements.forEach((item) =>
      this.toggleAccordionItem('false', item as HTMLElement)
    );
  }

  closeAccordion() {
    if (this.elements) {
      console.log('Closed Accordion. Removed eventlistener');
      this.elements.forEach((item) =>
        item.removeEventListener('click', this.toggleAccordion2)
      );
    }
  }

  toggleAccordionItem(
    itemToggle: string | undefined | null,
    elm: HTMLElement
  ): void {
    let body: HTMLElement;

    if (this.lastElement) {
      this.lastElement.setAttribute('aria-expanded', 'false');

      if (this.lastElement !== elm) {
        body = this.lastElement.querySelector(
          '.accordion__item .accordion-header'
        ) as HTMLElement;
        body.classList.remove('active');
      }

      body = this.lastElement.nextElementSibling as HTMLElement;
      if (body) {
        body.style.height = '0';
        body.style.overflow = 'hidden';
      }
    }

    if (itemToggle == 'false') {
      elm.setAttribute('aria-expanded', 'true');

      body = elm.querySelector(
        '.accordion__item .accordion-header'
      ) as HTMLElement;
      body.classList.add('active');

      body = elm.nextElementSibling as HTMLElement;
      if (body) {
        var height = body.scrollHeight;
        body.style.height = height + 'px';
      }

      this.lastElement = elm;
    }
  }

}
