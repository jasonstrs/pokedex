import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  offset: number = 0;
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(({ data, limit }) => {
      this.pokemons = data;
      this.offset += limit;
    })
  }

  onScroll(): void {
    if (this.offset == 0) return;
    this.pokemonService.getPokemons(`?offset=${this.offset}`).subscribe(({ data, limit }) => {
      this.pokemons = [...this.pokemons, ...data]
      this.offset += limit;
    })
  }
}
