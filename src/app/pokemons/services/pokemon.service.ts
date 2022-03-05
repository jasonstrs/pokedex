import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { AuthentificationService } from 'src/app/authentification/services/authentification.service';
import { MessageService } from 'src/app/services/message.service';
import { PagedData } from '../models/paged-data.model';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokemonsUrl : string = "https://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons"
  private teamUrl: string = "https://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/trainers/me/team"


  constructor(private messageService : MessageService, private http: HttpClient, private authService: AuthentificationService) { }

  getPokemons(limit: number, offset: number, searchValue: string = ""): Observable<PagedData<Pokemon>> {
    let queryParams = [
      `offset=${offset}`,
      `limit=${limit}`
    ];
    if (Boolean(searchValue)) queryParams.push(`search=${searchValue}`);

    return this.http.get<PagedData<Pokemon>>(`${this.pokemonsUrl}?${queryParams.join('&')}`).pipe(
      tap(() => this.log("fetched Pokemons")),
      catchError(this.handleError<PagedData<Pokemon>>('getPokemons', undefined)),
    );
  }

  getPokemon(id: number): Observable<PokemonDetail> {
    const url = `${this.pokemonsUrl}/${id}`
    return this.http.get<PokemonDetail>(url).pipe(
      tap(() => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handleError<PokemonDetail>(`getPokemon id=${id}`, undefined))
    );
  }

  getTeam(): Observable<number[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${this.authService.getAccessToken()}` })
    };

    return this.http.get<number[]>(this.teamUrl, httpOptions).pipe(
      tap(() => this.log("fetched team")),
      catchError(this.handleError<number[]>('getTeam', undefined))
    );
  }

  setTeam(ids: number[]): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${this.authService.getAccessToken()}` })
    };

    return this.http.put(this.teamUrl, ids, httpOptions).pipe(
      tap(() => this.log("set team")),
      catchError(this.handleError<number[]>('setTeam', undefined))
    );
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
