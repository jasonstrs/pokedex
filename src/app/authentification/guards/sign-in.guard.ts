import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthentificationService } from "../services/authentification.service";

@Injectable({
  providedIn: 'root'
})

// Block access to logged person
export class SignInGuard implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {
  }

  canActivate() {
    if (!this.authService.getAccessToken())
      return true;
    this.router.navigate(['/view-team']);
    return false;
  }

}
