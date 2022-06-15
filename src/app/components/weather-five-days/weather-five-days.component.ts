import { Component, Input, OnInit } from '@angular/core';
import { IFiveDaysForecast, IListForecast } from 'src/app/shared/model/weather-app.model';

@Component({
  selector: 'app-weather-five-days',
  templateUrl: './weather-five-days.component.html',
  styleUrls: ['./weather-five-days.component.scss']
})
export class WeatherFiveDaysComponent implements OnInit {

  @Input() day!: IListForecast;


  constructor() { }

  ngOnInit(): void {
  }

  dayDate(date: number) {
    return new Date(date * 1000);
  }

  weatherIcon(icon: string) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  airTemperature(temp: number) {
    return Math.round(temp);
  }

}
