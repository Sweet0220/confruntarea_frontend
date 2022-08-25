import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { MainMenuComponent} from "./main-menu/main-menu.component";
import {LoginComponent} from "./login/login.component";
import {AdminMenuComponent} from "./admin-menu/admin-menu.component";
import {RegisterComponent} from "./register/register.component";
import {ForgotUsernameComponent} from "./login/forgot-username/forgot-username.component";
import {ForgotPasswordComponent} from "./login/forgot-password/forgot-password.component";
import {ResetFormComponent} from "./login/forgot-password/reset-form/reset-form.component";


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'game', component: MainMenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminMenuComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-username', component: ForgotUsernameComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'forgot-password/reset-form', component: ResetFormComponent}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
