import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IListForecast } from 'src/app/shared/model/weather-app.model';

@Component({
  selector: 'app-weather-hourly-dialog',
  templateUrl: './weather-hourly-dialog.component.html',
  styleUrls: ['./weather-hourly-dialog.component.scss']
})
export class WeatherHourlyDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WeatherHourlyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IListForecast[],) { }

  ngOnInit(): void {
  }

  dayDate(date: number) {
    return new Date(date * 1000);
  }

  weatherIcon(icon: string) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

}
