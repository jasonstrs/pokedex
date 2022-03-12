import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  email: string='';
  password: string='';
  hide: boolean = true;
  error: string = '';

  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.createTrainer(this.email, this.password).subscribe((data) => {
      if (data.error) {
        this.error = data.error.message
        return;
      }
      this.authService.setAccessToken(data.idToken)
      this.router.navigate(['/view-team'])
    })
  }
}
