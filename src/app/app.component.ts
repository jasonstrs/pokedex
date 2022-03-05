import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {}

  title = 'pokedex';
  manageTeamRoutes = ['/default-auth', '/inscription', '/connexion', '/view-team']

  ngOnInit() {}
}
