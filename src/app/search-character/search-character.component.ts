import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.css']
})
export class SearchCharacterComponent implements OnInit {
  @Output() newSearch = new EventEmitter<string>();
  searchText;
  constructor() { }

  ngOnInit(): void {
  }
  onKey(search: any): void {
    this.newSearch.emit(search.target.value);
  }
}
