import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/data/dataService';
import { Reflection } from 'src/data/Reflection';


@Component({
  selector: 'app-reflections',
  templateUrl: './reflections.component.html',
  styleUrls: ['./reflections.component.css']
})
export class ReflectionsComponent implements OnInit {

  @Input() item!: Reflection;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.item = this.dataService.selectedWriting;
  }

}
