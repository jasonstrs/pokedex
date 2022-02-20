import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { debounceTime, distinctUntilChanged, BehaviorSubject, switchMap } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Output() pokemonEvent = new EventEmitter<Pokemon>();
  private searchTerms = new BehaviorSubject<string>("");
  offset: number = 0;
  limit: number = 20;
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
    this.getPokemons();
    this.initSearchPokemon();
  }

  onScroll(): void {
    if (this.offset == 0) return;
    this.getPokemons();
  }

  addPokemon(pokemon: Pokemon) {
    this.pokemonEvent.emit(pokemon);
  }

  initSearchPokemon() : void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonService.getPokemons(this.limit, 0, term)),
    ).subscribe(({ data }) => {
      this.pokemons = data;
      this.offset = this.limit;
    });
  }

  searchPokemons(value: string) {
    this.searchTerms.next(value);
  }

  getPokemons(): void {
    this.pokemonService.getPokemons(this.limit, this.offset, this.searchTerms.getValue()).subscribe(({ data }) => {
      this.pokemons = [...this.pokemons, ...data]
      this.offset += this.limit;
    });
  }
}
