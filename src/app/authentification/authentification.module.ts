import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { DefaultViewComponent } from './default-view/default-view.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ConnexionComponent } from './connexion/connexion.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DefaultViewComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    MatRippleModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthentificationModule { }
