import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonRoutingModule } from './pokement-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewTeamComponent } from './view-team/view-team.component';
import { ViewDetailTeamComponent } from './view-detail-team/view-detail-team.component';
import { AddPokemonTeamComponent } from './add-pokemon-team/add-pokemon-team.component';
import { AddPokemonDialogComponent } from './add-pokemon-dialog/add-pokemon-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent,
    ViewTeamComponent,
    ViewDetailTeamComponent,
    AddPokemonTeamComponent,
    AddPokemonDialogComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    PokemonRoutingModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatInputModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class PokemonsModule { }
