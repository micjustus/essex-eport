import { Component, OnInit } from '@angular/core';
import { ModuleWriting } from "src/data/ModuleWriting";
import { DataService } from 'src/data/dataService';
import { Reflection } from 'src/data/reflection';

@Component({
  selector: 'app-writings',
  templateUrl: './writings.component.html',
  styleUrls: ['./writings.component.css']
})
export class WritingsComponent implements OnInit {

  constructor(private dataService: DataService) {

   }

   public get writings(){
     let items: Reflection[] = [];

     this.dataService.modules.forEach(mod=>{
       mod.reflections.forEach(ref=>{
        items.push(ref);
       });
     });

     return items;
   }

  ngOnInit(): void {
  }

}
