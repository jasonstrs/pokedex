import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() id?: number;
  pokemon?: PokemonDetail;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.id) {
      this.getPokemon(this.id)
      this.playSound(this.id)
    }
  }

  getPokemon(idPokemon: number) {
    this.pokemonService.getPokemon(idPokemon).subscribe(pokemon => this.pokemon = pokemon)
  }

  playSound(id: number): void {
    new Audio(`/assets/audio/${id}.mp3`).play();
  }
}
