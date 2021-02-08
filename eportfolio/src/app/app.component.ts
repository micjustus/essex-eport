import { Component } from '@angular/core';
import { DataService } from 'src/data/dataService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Michael's EPortfolio";

  constructor(private dataService: DataService){}

  ngOnInit(): void {
  }
}
