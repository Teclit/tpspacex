import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapsulesComponent } from "./capsules/capsules.component";
import { LaunchesComponent } from './launches/launches.component';

@NgModule({
    declarations: [
      AppComponent,
      CapsulesComponent,
      LaunchesComponent,

    ],
    
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgxPaginationModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class AppModule { }
