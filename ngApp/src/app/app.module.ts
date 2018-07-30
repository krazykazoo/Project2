import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameComponent } from './components/game/game.component';
import { FriendsComponent } from './components/friends/friends.component';
import { GamesComponent } from './components/games/games.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainNavComponent } from './components/main-nav/main-nav.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { GameService } from './services/game/game.service';
import { AddFriendComponent } from './components/add-friend/add-friend.component';

import { SanitizeHtmlPipe } from './classes/sanitize-html-pipe.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyA3fg1DuXlXGN_76BKZXyC1JnMA2DZRp4Q",
  authDomain: "project2-137a2.firebaseapp.com",
  databaseURL: "https://project2-137a2.firebaseio.com",
  projectId: "project2-137a2",
  storageBucket: "",
  messagingSenderId: "50528571639"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GameComponent,
    FriendsComponent,
    GamesComponent,
    LoginComponent,
    RegisterComponent,
    MainNavComponent,
    AddFriendComponent,
    SanitizeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService, UserService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
