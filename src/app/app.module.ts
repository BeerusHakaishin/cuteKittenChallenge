import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KittenComponent } from './kitten/kitten.component';
import { HomeComponent } from './home/home.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserKittenComponent,
    NavbarComponent,
    KittenComponent,
    HomeComponent,
    CreateKittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
