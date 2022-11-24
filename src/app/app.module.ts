import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapsulesComponent } from "./capsules/capsules.component";
import { LaunchesComponent } from './launches/launches.component';

@NgModule({
    declarations: [
      AppComponent,
      LaunchesComponent,
      CapsulesComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
