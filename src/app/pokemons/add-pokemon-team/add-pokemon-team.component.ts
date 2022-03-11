import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddPokemonDialogComponent } from '../add-pokemon-dialog/add-pokemon-dialog.component';
import { PokemonDetail } from '../models/pokemon-detail.model';

@Component({
  selector: 'app-add-pokemon-team',
  templateUrl: './add-pokemon-team.component.html',
  styleUrls: ['./add-pokemon-team.component.scss']
})
export class AddPokemonTeamComponent implements OnInit {
  @Output() pokemonEvent = new EventEmitter<number>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddPokemonDialogComponent, {
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe(id => {
      if (id)
        this.pokemonEvent.emit(id);
    });
  }

}
