import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CapsulesComponent } from './capsules/capsules.component';

@NgModule({
  declarations: [
    AppComponent,
    CapsulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
import { CapsulesComponent } from "./capsules/capsules.component";
import { LaunchesComponent } from './launches/launches.component';

@NgModule({
    declarations: [
        AppComponent,
        LaunchesComponent,
        CapsulesComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ]
>>>>>>> master
})
export class AppModule { }
