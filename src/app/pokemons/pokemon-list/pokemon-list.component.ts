import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Output() pokemonEvent = new EventEmitter<Pokemon>();

  offset: number = 0;
  limit: number = 20;
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
    this.pokemonService.getPokemons(`?limit=${this.limit}`).subscribe(({ data }) => {
      this.pokemons = data;
      this.offset += this.limit;
    })
  }

  onScroll(): void {
    if (this.offset == 0) return;
    this.pokemonService.getPokemons(`?offset=${this.offset}&limit=${this.limit}`).subscribe(({ data, limit }) => {
      this.pokemons = [...this.pokemons, ...data]
      this.offset += limit;
    })
  }

  addPokemon(pokemon: Pokemon) {
    this.pokemonEvent.emit(pokemon);
  }
}
