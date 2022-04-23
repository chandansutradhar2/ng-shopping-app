import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeautyComponent } from './beauty/beauty.component';
import { ContainerComponent } from './layouts/container/container.component';
//step1: define all route point
const routes: Routes = [
  { path: '', component: ContainerComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((auth) => auth.AuthModule),
  },
  { path: 'beauty', component: BeautyComponent },
  { path: 'signup', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
