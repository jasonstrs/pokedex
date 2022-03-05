import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/authentification/services/authentification.service';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.scss']
})
export class ViewTeamComponent implements OnInit {
  pokemons: PokemonDetail[] = [];

  constructor(private pokemonService: PokemonService, private authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
    this.pokemonService.getTeam().subscribe((ids) => {
      if (!ids) {
        this.pokemons = []
        return
      }
      forkJoin(ids.map((id => this.pokemonService.getPokemon(id)))).subscribe((pokemons) => this.pokemons = pokemons)
    });
  }

  removePokemon(id: number): void {
    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id != id);
    this.pokemonService.setTeam(this.pokemons.map((pok) => pok.id)).subscribe();
  }

  addPokemon(id: number): void {
    this.pokemonService.getPokemon(id).subscribe(pok => this.pokemons = [...this.pokemons, pok])
    this.pokemonService.setTeam([...this.pokemons.map(pok => pok.id), +id]).subscribe()
  }

  logout(): void {
    this.authService.setAccessToken('');
    this.router.navigate(['/default-auth']);
  }
}
