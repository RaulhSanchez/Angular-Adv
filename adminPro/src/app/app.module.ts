import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { NonpagefoundComponent } from './pages/nonpagefound/nonpagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    NonpagefoundComponent
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
