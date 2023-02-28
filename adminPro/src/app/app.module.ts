import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages/pages.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    AuthModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
