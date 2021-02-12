import { Component, Input, OnInit } from '@angular/core';
import { Artefact } from 'src/data/Artefact';
import { DataService } from 'src/data/dataService';

@Component({
  selector: 'app-artefacts',
  templateUrl: './artefacts.component.html',
  styleUrls: ['./artefacts.component.css']
})
export class ArtefactsComponent implements OnInit {

  @Input() items!: Artefact[];
  @Input() imageURL: string='';
  @Input() rootPath: string='/reflections';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  setPiece(writing: Artefact) {
    this.dataService.selectedWriting = writing;
  }
}
