import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { PagedData } from '../models/paged-data.model';
import { PokemonDetail } from '../models/pokemon-detail.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokemonsUrl : string = "https://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons"

  constructor(private messageService : MessageService, private http: HttpClient) { }

  getPokemons(): Observable<PagedData<Pokemon>> {
    return this.http.get<PagedData<Pokemon>>(this.pokemonsUrl).pipe(
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
