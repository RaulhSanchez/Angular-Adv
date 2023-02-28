import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:PagesComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'grafica1', component: Grafica1Component},
      //{path: '', redirectTo:'/dashboard',pathMatch:'full'},
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AuthModule
  ],
  exports:[RouterModule]
})
export class PagesRouterModule { }
