import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './routing/modules/main-page/main-page.component';


const routes: Routes = [
  {
    path: 'mainpage',
    component: MainComponent
  },
  {
    path: 'login',
    loadChildren: ()=> import('./routing/modules/login/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'adminpage',
    loadChildren: ()=> import('./routing/modules/admin-page/admin-page.module').then(m => m.AdminPageModule), 
  },
  {
    path: '', redirectTo: 'mainpage', pathMatch: 'full'
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
