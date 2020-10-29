import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
@Input() characterItems: any;
@Input() searchData: string;
@Output() newItemEvent = new EventEmitter<any>();
tempname;
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }
  onSelect(name, image, product): void {
    this.tempname = name;
    this.newItemEvent.emit({name, image, product});
  }
}
