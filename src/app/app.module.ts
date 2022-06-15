import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { WeatherFiveDaysComponent } from './components/weather-five-days/weather-five-days.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from "@angular/forms";
import { WeatherHourlyComponent } from './components/weather-hourly/weather-hourly.component';
import {MatDialogModule} from '@angular/material/dialog';
import { WeatherHourlyDialogComponent } from './components/weather-hourly-dialog/weather-hourly-dialog.component';
import { WeatherErrorDialogComponent } from './components/weather-error-dialog/weather-error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTodayComponent,
    WeatherFiveDaysComponent,
    WeatherHourlyComponent,
    WeatherHourlyDialogComponent,
    WeatherErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
