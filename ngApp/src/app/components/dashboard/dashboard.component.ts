import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Game } from '../../classes/game';
import { GameService } from '../../services/game/game.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  games: Game[];

  constructor(private authService: AuthService, private gameService: GameService) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.getGames();
  }

  getGames() : void {
    this.gameService.getAllGamesForUser(this.user.id)
      .subscribe(games => this.games = games);
  }

}
