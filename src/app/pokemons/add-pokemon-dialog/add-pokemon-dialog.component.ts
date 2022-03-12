import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-add-pokemon-dialog',
  templateUrl: './add-pokemon-dialog.component.html',
  styleUrls: ['./add-pokemon-dialog.component.scss']
})

export class AddPokemonDialogComponent implements OnInit {
  pokemons: Pokemon[] = [];
  id?: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  savePokemon(pokemon: Pokemon): void {
    this.id = pokemon.id;
  }
}
