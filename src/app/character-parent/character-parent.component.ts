import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-parent',
  templateUrl: './character-parent.component.html',
  styleUrls: ['./character-parent.component.css']
})
export class CharacterParentComponent implements OnInit {
  dashboardItems;
  characterData;
  searchData;
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data: any) => {
      this.dashboardItems = data.results;
    });
  }

  addItem(characterData: any) {
    this.characterData = characterData;
  }

  getSearch(search: string): void {
    this.searchData = search;
  }

}
