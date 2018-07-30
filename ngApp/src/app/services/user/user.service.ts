import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


/**
 * Observable.of(...items) -- Returns an Observable instance that synchronously
 * delivers the values provided as arguments
 * --
 * Observable.from(iterable) -- Converts an argument to an Observable instance
 * This method is commonly used to convert an array to an observable
 */
import { Observable, of } from 'rxjs';

/**
 * the .tap operator (function) invokes an action for each element in the observable sequence
 * Arguments: onNext, onError, onCompleted  <-- 3 functions as parameters, separated by commas
 *
 * it is used for the debugging/logging of query behavior by intercepting the
 * message stream to run arbitrary actions for messages on the pipeline
 * --
 * .catchError does exactly the same thing as tap but with error response
 * NOTE: can add retry(3), as first step in the pipe to try something 3 times before failing
 *    --> DON'T retry authentication requests
 * --
 * the .map operator is used to observe a source observable's emitted value(s) and
 * transform them, returning a new observable w/ transformed values
 * ie. map((response: Response) => response.json().data)
 * ie. map((val: number) => val * val);
 *
 * ^^ here map will take an observable that consists of int values and return a new one with the new val*val number
 * --
 * The filter() operator takes a function predicate as an argument, which returns true if the emitted value meets
 * the criteria, or false otherwise. Only the values that meet the criteria will make it to the observer
 * EX:
 * Rx.Observable.from(beersArray)
 * .filter(beer => beer.price < 8)
 * .map(beer => beer.name + ": $" + beer.price)
 * .subscribe(
 * beer => console.log(beer),
 * err => console.error(err),
 * () => console.log("Streaming is over")
 */
import { catchError, map, tap } from 'rxjs/operators';

/**
 *  the .pipe operator (function) is used to compose multiple operators into one using dot-chaining
 *  ~ used to be '.let' operator ~
 *  --
 *  .subscribe is the function that actually executes the observable.
 *  It takes three callback parameters as follows:
 *  .subscribe(success, failure, complete);
 *
 *  ^^ subscribing to an observable is commonly done inside of model using the observable using '... | async'
 *  --
 */

import { User } from '../../classes/user';
import { Friend } from '../../classes/friend';
import { MessageLoggerService as MessageService } from '../message-logger.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:8080/data/users';  // endpoint to where we will be getting user data

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // POST new user
  createUser(user : User): Observable<User> {
    return this.http.post<User>(this.usersUrl + "/create", user, httpOptions).pipe(
      tap((user: User) => this.log('created hero w/ id='+user.id)),
      catchError(this.handleError<User>('createUser'))
    );
  }

  

  // GET users from the server
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(users => this.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/user?id=${id}`).pipe(
      tap(() => this.log('fetched user w/ id: '+id)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
    //return null;
  }

  getFriends(id: number): Observable<Friend[]> {
    return this.http.get<Friend[]>(`${this.usersUrl}/friends?id=${id}`).pipe(
      tap(() => this.log(`fetched friends of user w/ id: ${id}`)),
      catchError(this.handleError<Friend[]>('getFriends'))
    );
  }

  searchForUsername(search: string) {
    return this.http.get<User[]>(`${this.usersUrl}/search?search=${search}`).pipe(
      tap(() => this.log(`searched for users w/ string: ${search}`)),
      catchError(this.handleError<User[]>('searchForUsername'))
    );
  }

  addFriendRequest(from: number, to: number) {
    return this.http.post(`${this.usersUrl}/friends/addRequest`, {"user": from, "friend":to,"status":1}).pipe(
      tap(() => this.log(`send friend request to from ${from} to ${to}`)),
      catchError(this.handleError<any>('add friend request'))
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

