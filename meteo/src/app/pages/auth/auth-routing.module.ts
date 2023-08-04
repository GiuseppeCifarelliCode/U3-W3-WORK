import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FavouritesComponent } from '../favourites/favourites.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:SignupComponent
  },
  {
    path:"favourites",
    component:FavouritesComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
