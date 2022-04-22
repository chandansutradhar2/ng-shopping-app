import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BeautyComponent } from './beauty/beauty.component';
import { ContainerComponent } from './layouts/container/container.component';
//step1: define all route point
const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'beauty', component: BeautyComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
