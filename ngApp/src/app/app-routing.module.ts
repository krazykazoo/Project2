import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
// shift + alt + down to duplicate lines
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FriendsComponent } from './components/friends/friends.component';
import { GameComponent } from './components/game/game.component';
import { GamesComponent } from './components/games/games.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
    {
      path: '', // think of as just slash at the end
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'game/:id',  // colon for url endpoint
      component: GameComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'games',
      component: GamesComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'friends',
      component: FriendsComponent,
      canActivate: [AuthGuard]
    },
    // ****WHAT WE WERE TALKING ABOUT IN REGARDS TO CROSSING ROUTE W/ ENDPOINT****
    { path: '**', redirectTo: ''} // wildcard for all plus subdirectories that havent already been found from above

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
