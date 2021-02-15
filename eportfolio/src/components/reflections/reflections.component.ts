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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.item = <Reflection>this.dataService.selectedWriting;
    this.currentIndex = this.dataService.writings.indexOf(this.item);

  }

  onError(event: any){
    console.log("markdown error occurred");
    this.loadFailed = true;
  }

  onLoad(){
    this.loadFailed = false;
    console.log("markdown load finished");
  }

  navigateLeft(){
    if (this.currentIndex>0){
      this.loadFailed=false;
      this.item = this.dataService.writings[this.currentIndex-1] as Reflection;
      this.currentIndex = this.currentIndex - 1;
    }
  }

  navigateRight(){
    if (this.currentIndex<this.dataService.writings.length-1){
      this.loadFailed=false;
      this.item = this.dataService.writings[this.currentIndex+1] as Reflection;
      this.currentIndex = this.currentIndex + 1;
    }
  }
}
