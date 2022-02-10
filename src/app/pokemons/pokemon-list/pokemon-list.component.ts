import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons?: Pokemon[];

  constructor(private pokemonService: PokemonService) { }


  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(({ data }) => this.pokemons = data)
  }

  onScroll(): void {
    console.log('scrolled!!');
  }


}
