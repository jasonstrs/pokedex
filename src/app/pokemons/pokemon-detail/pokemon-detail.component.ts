import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() set setId(id: number | undefined) {
    if (id) {
      this.getPokemon(id);
      this.playSound(id);
    }
  }
  pokemon?: PokemonDetail;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
  }

  getPokemon(idPokemon: number) {
    this.pokemonService.getPokemon(idPokemon).subscribe(pokemon => this.pokemon = pokemon)
  }

  playSound(id: number): void {
    new Audio(`/assets/audio/${id}.mp3`).play();
  }
}
