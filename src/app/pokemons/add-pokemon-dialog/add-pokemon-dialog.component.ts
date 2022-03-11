import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-add-pokemon-dialog',
  templateUrl: './add-pokemon-dialog.component.html',
  styleUrls: ['./add-pokemon-dialog.component.scss']
})

export class AddPokemonDialogComponent implements OnInit {
  myControl = new FormControl();
  pokemons: Pokemon[] = [];
  filteredOptions: Observable<Pokemon[]>;
  id?: number;

  constructor(private pokemonService: PokemonService) {
    this.filteredOptions = this.initFilteredOptions();
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons(200, 0).subscribe(response => {
      this.pokemons = response.data
      this.filteredOptions = this.initFilteredOptions();
    })
  }

  updateSelected(event: any): void {
    this.id = event.option.id
  }

  private initFilteredOptions(): Observable<Pokemon[]> {
    return this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): Pokemon[] {
    const filterValue = value.toLowerCase();
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(filterValue));
  }

}
