import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentification/guards/auth.guard';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ViewTeamComponent } from './view-team/view-team.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokedexComponent },
  {
    path: 'view-team',
    component: ViewTeamComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
