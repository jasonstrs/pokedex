import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPokemonTeamComponent } from './add-pokemon-team.component';

describe('AddPokemonTeamComponent', () => {
  let component: AddPokemonTeamComponent;
  let fixture: ComponentFixture<AddPokemonTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPokemonTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPokemonTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
