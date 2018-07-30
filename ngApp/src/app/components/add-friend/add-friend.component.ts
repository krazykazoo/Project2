import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../classes/user';
import { Friend } from '../../classes/friend';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  @Input() user: User;  //input() set from selector id
  @Input() pendingRequests: Friend[]; //input() set from selector id
  searchResults: User[];

  _isPending: boolean;  //see model for this variable

  constructor(private userService: UserService) { }

  ngOnInit() {
  
  }

  searchForUsername(searchUsername: string) {
    //send search for username of friends
    this.userService.searchForUsername(searchUsername).pipe(
      map(res => res.filter(resUser => resUser.id !== this.user.id)) //filters out user's id
    ).subscribe(results => this.searchResults = results);
  }

  sendFriendRequest(id: number) {
    this.userService.addFriendRequest(this.user.id,id).subscribe();
    //need to alert that friend request has been sent and reset the searchResults
  }


  /*
   * Works right now, but for some reason this is getting called an extra time
   * I think it may have to deal with the searchForUsername() observable not being
   * complete yet before moving on, then it loops through searchResults after as well
  */
  //checks pending friend requests to see if it exists
  isPending(id: number) : boolean {
    this._isPending = false;
    //loops through pending requests, returns true if pending
    for(let pending of this.pendingRequests) {
      if(pending.friend === id) {
        this._isPending = true;
        return true;
      }
    }
    return false;
  }

}
