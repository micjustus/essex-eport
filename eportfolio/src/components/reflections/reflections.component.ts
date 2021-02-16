import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/data/dataService';
import { Reflection } from 'src/data/reflection';


@Component({
  selector: 'app-reflections',
  templateUrl: './reflections.component.html',
  styleUrls: ['./reflections.component.css']
})
export class ReflectionsComponent implements OnInit {

  @Input() item!: Reflection;
  private currentIndex: number = -1;
  loadFailed = false;
  navLeft: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.item = <Reflection>this.dataService.selectedWriting;
    this.currentIndex = this.dataService.writings.indexOf(this.item);

  }

  public get count(){
    return this.dataService.writings.length;
  }

  public get hasPrevious(){
    return this.currentIndex-1>=0;
  }

  public get hasNext(){
    return this.currentIndex+1<=this.dataService.writings.length-1;
  }

  private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
  async onError(event: any){
    console.log("markdown error occurred");
//    await this.delay(3000);
    this.loadFailed = true;

  }

  onLoad(){
    this.loadFailed = false;
    console.log("markdown load finished");
  }

  navigateLeft(){
    if (this.currentIndex>0){
      var item = document.querySelector(".carousel-item") as HTMLElement;
      if (item) {
        item.style.opacity = '0';

      }

      this.loadFailed=false;
      this.navLeft = true;
      this.item = this.dataService.writings[this.currentIndex-1] as Reflection;
      this.currentIndex = this.currentIndex - 1;
    }
  }

  navigateRight(){
    if (this.currentIndex+1<=this.dataService.writings.length-1){
      var item = document.querySelector(".carousel-item") as HTMLElement;
      if (item) {
        item.style.opacity = '0';

      }

      this.loadFailed=false;
      this.navLeft = false;
      this.item = this.dataService.writings[this.currentIndex+1] as Reflection;
      this.currentIndex = this.currentIndex + 1;
    }
  }
}
