import { Component, Input, OnInit } from '@angular/core';
import { Tutor } from 'src/data/tutor';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

    @Input("value") tutor!: Tutor;

  constructor() {
    console.log("[Tutor] Ctor. tutor = " + JSON.stringify(this.tutor));
  }

  ngOnInit(): void {
    console.log("[Tutor] ngOnInit. tutor = " + JSON.stringify(this.tutor));
  }

}
