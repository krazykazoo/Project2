import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { Friend } from '../../classes/friend';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { filter, flatMap, switchMap, mergeMap } from 'rxjs/operators';
import { catchError, map, tap, take, merge } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MapOperator } from '../../../../node_modules/rxjs/internal/operators/map';



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  user: User;
  friends: Friend[];
  pendingRequests: Friend[];  //these are the users outgoing pending requests
  friendRequests: Friend[];

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.getFriends();
    this.getPending();
    this.getFriendRequests();
  }

  /*
   * Looked into trying to handle all of these getFriends calls in one getFriends()
   * call and then filter it from there but couldn't figure out if there was a way to 
   * do it ... maybe just loop through the list and assign after ??
  */
  getFriends() : void {
    this.userService.getFriends(this.user.id).pipe(
      map(friend => friend.filter(fr => fr.status !== 1 && fr.user === this.user.id ))  //filters for only accepted and user id
    ).subscribe(friends => {
      friends.map(friend => this.userService.getUserById(friend.friend).pipe(map(usr => usr['username'])).subscribe(username => { friend.username = username; return friend; }));
      this.friends = friends});
  }

  getPending() : void {
    this.userService.getFriends(this.user.id).pipe(
      map(pending => pending.filter(pend => pend.status === 1 && pend.user === this.user.id ))  // filters for only status is 1 and user id
    ).subscribe(pendingRequests => {
      pendingRequests.map(pendingRequest => this.userService.getUserById(pendingRequest.friend).pipe(map(usr => usr['username'])).subscribe(username => { pendingRequest.username = username; return pendingRequest; }));
      this.pendingRequests = pendingRequests});
  }

  getFriendRequests() : void {
    this.userService.getFriends(this.user.id).pipe(
      map(requests => requests.filter(fReq => fReq.status === 1 && fReq.friend === this.user.id))  // filters for only status is 1 and is receiver of request
      // switchMap(request => request.map(req => req.username = this.userService.getUserById(req['friend']).pipe(take(1),map(usr => { return usr['username'] }) ))))
    ).subscribe(friendRequests => {
      friendRequests.map(friendRequest => this.userService.getUserById(friendRequest.user).pipe(map(usr => usr['username'])).subscribe(username => { friendRequest.username = username; return friendRequest; }));
      this.friendRequests = friendRequests});
  }


  approveRequest() : void {

  }

  denyRequest() : void {

  }


}
