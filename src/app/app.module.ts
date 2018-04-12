import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse, HttpClientModule } from '@angular/common/http'
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { EventService } from "./event.service";

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [EventService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
