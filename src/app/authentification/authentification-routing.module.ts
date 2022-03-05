import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { DefaultViewComponent } from './default-view/default-view.component';
import { SignInGuard } from './guards/sign-in.guard';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: 'default-auth', component: DefaultViewComponent, canActivate: [SignInGuard] },
  { path: 'inscription', component: InscriptionComponent, canActivate: [SignInGuard] },
  { path: 'connexion', component: ConnexionComponent, canActivate: [SignInGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
