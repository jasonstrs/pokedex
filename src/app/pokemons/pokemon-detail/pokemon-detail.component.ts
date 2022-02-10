import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon?: PokemonDetail;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon)
  }

  jouerSon(): void {
    new Audio(`/assets/audio/${this.pokemon?.id}.mp3`).play();
  }

  goBack() : void {
    this.router.navigate(['/pokemons']);
  }

}
