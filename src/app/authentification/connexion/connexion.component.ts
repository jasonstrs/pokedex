import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  email: string='';
  password: string='';
  hide: boolean = true;
  error: string = '';

  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.email, this.password).subscribe((data) =>  {
      if (data.error) {
        this.error = data.error.message
        return;
      }
      this.authService.setAccessToken(data.access_token)
      this.router.navigate(['/view-team'])
    })
  }

}
