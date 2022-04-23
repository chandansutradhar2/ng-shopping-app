import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';
import { SocialSigninComponent } from './social-signin/social-signin.component';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ResetPasswordComponent,
    SocialSigninComponent,
  ],
  imports: [CommonModule, UiModule, ReactiveFormsModule, AuthRoutingModule],
  exports: [AuthRoutingModule],
})
//AuthModule contain features of authentication. hence its feature module
export class AuthModule {}
