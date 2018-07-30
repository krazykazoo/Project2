import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Game } from '../../classes/game';
import { MessageLoggerService as MessageService } from '../message-logger.service';



@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gamesUrl = 'http://localhost:8080/data/games'

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAllGamesForUser(id: number): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.gamesUrl}?id=${id}`).pipe(
      tap(() => this.log(`fetched games for user w/ id: ${id}`)),
      catchError(this.handleError<Game[]>('fetching games'))
    );
  }





    /**
   * ~Technique gathered from angular docs~
   * --
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
                                //result as an optional parameter
  private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        //TODO: send the error to remote logging infrastructure if desired
        console.log(error);

        //TODO: transform error message for user consumption
        this.log(`${operation} failed: ${error.message}`);

        //Let app keep running by returning empty result
        return of(result as T);
      };

  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
  }
}
