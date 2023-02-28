import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { PagesRouterModule } from './pages/pages.router';
import { AuthRoutingModule } from './auth/auth.routing';

import { NonpagefoundComponent } from './pages/nonpagefound/nonpagefound.component';



const routes: Routes = [

    {path: '', redirectTo:'/dashboard',pathMatch:'full'},
    {path: '**', component:NonpagefoundComponent},
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRouterModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
