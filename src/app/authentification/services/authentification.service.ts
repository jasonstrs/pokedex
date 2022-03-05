import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private baseUrl : string = "https://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/"
  private access_token: string='';

  constructor(private messageService: MessageService, private http: HttpClient) { }


  createTrainer(email: string, password: string): Observable<any> {
    return this.http.post<Auth>(`${this.baseUrl}trainers`, { email, password }).pipe(
      tap(() => this.log("trainer creation")),
      catchError((error) => of(error))
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<Auth>(`${this.baseUrl}auth/login`, { email, password }).pipe(
      tap(() => this.log("trainer connexion")),
      catchError((error) => of(error))
    );
  }

  setAccessToken(token: string) {
    this.access_token = token
  }

  getAccessToken() {
    return this.access_token;
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
