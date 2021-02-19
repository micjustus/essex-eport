import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/data/dataService';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() data!: string;
  content: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if (this.data){
      console.log("Calling dataservice");
      this.dataService.loadFromUrl(this.data)
        .subscribe(d => this.content = d);
    }
  }

}
