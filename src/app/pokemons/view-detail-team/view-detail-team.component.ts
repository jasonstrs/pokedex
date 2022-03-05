import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonDetail } from '../models/pokemon-detail.model';

@Component({
  selector: 'app-view-detail-team',
  templateUrl: './view-detail-team.component.html',
  styleUrls: ['./view-detail-team.component.scss']
})
export class ViewDetailTeamComponent implements OnInit {
  @Input() pokemon?: PokemonDetail
  @Output() pokemonEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    if (this.pokemon)
      this.pokemonEvent.emit(this.pokemon.id);
  }

}
