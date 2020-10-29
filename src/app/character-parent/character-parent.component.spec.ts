import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterParentComponent } from './character-parent.component';

describe('CharacterParentComponent', () => {
  let component: CharacterParentComponent;
  let fixture: ComponentFixture<CharacterParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
