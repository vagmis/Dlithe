import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ColleguesComponent } from './collegues/collegues.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ColleguesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
