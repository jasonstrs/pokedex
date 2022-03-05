import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-pokemon-dialog',
  templateUrl: './add-pokemon-dialog.component.html',
  styleUrls: ['./add-pokemon-dialog.component.scss']
})

export class AddPokemonDialogComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  pokemons: Pokemon[] = [];
  filteredOptions: Observable<Pokemon[]>;
  id?: number;

  constructor(private pokemonService: PokemonService, @Inject(MAT_DIALOG_DATA) private selectedIds: any) {
    this.filteredOptions = this.initFilteredOptions();
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons(200, 0).subscribe(response => {
      this.pokemons = response.data.filter(pok => !this.selectedIds.includes(pok.id))
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
