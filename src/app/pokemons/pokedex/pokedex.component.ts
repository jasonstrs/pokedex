import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  id?: number;

  constructor() { }

  ngOnInit(): void {
  }

  loadPokemon(pokemon: Pokemon) : void {
    this.id = pokemon.id;
  }

}
