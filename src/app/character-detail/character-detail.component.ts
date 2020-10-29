import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input() characterData: any;
  constructor() {
   }

  ngOnInit(): void {
  }

}
