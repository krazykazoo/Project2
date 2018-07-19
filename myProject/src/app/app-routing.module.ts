import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//shift alt down to duplicate lines
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';


//define routes in here as an array of objects
const routes: Routes = [
  {
    path: '', //think of just forward slash at end
    component: UsersComponent
  },
  {
    path: 'details/:id',  //colon for url parameter (referred by id in future)
    component: DetailsComponent
  },
  {
    path: 'posts', 
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
