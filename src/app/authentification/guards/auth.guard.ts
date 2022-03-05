import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthentificationService } from "../services/authentification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {
  }

  canActivate() {
    if (this.authService.getAccessToken())
      return true;
    this.router.navigate(['/default-auth']);
    return false;
  }

}
