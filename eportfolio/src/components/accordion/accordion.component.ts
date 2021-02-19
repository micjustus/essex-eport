import { HttpClient } from '@angular/common/http';
import {
  AfterViewChecked,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataService } from 'src/data/dataService';

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
  private contentToLoad: string[];

  constructor(private http: HttpClient,
    private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.initialize = true;
    }
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.closeAccordion();
  }

  ngAfterViewChecked(): void {
    if (this.initialize) {
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
      this.elements.forEach((item) =>
        item.removeEventListener('click', this.toggleAccordion2)
      );
    }
  }

  loading: boolean = false;

  loadContent(path: string): any {
    console.log('Load content later: ' + path);

    //this.dataService.loadFromUrl(path).subscribe(data=> console.log("returned data: " + data));
    var res = this.dataService.loadFromUrl(path).subscribe(data=> {
      console.log("Perfoming next call in subscribe => " + data);
    },
    error=> console.log("An error dun occird: " + error));


    //return this.dataService.loadFromUrlPromise(path);

    // if (this.loading) {
    //   console.log('waiting for previous HTTP');
    //   return "";
    // }

    // this.loading = true;

    // this.http.get<string>(path, { responseType: 'text' })
    //   .pipe(
    //     shareReplay(1)
    //   )
    // .subscribe(
    //   (val) => console.log(val),
    //   (err) => console.log('Error ' + JSON.stringify(err)),
    //   () => {
    //     this.loading = false;
    //     console.log('complete');
    //   }
    // );
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
