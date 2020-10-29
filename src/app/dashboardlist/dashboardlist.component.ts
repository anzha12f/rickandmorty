import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-dashboardlist',
  templateUrl: './dashboardlist.component.html',
  styleUrls: ['./dashboardlist.component.css']
})
export class DashboardlistComponent implements OnInit {

  dashboardItems;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    if (!this.dashboardItems || this.dashboardItems.length > 0){
    this.characterService.getCharacters().subscribe((data: any) => {
      this.dashboardItems = data.results;
    });
  }
}

}
