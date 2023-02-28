import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NonpagefoundComponent } from './pages/nonpagefound/nonpagefound.component';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NonpagefoundComponent,  
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
