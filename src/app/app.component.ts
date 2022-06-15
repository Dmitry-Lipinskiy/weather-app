import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeatherErrorDialogComponent } from './components/weather-error-dialog/weather-error-dialog.component';
import { WeatherHourlyDialogComponent } from './components/weather-hourly-dialog/weather-hourly-dialog.component';
import { IFiveDaysForecast, IListForecast, IWeatherToday } from './shared/model/weather-app.model';
import { WeatherService } from './shared/service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  inputValue: string = "Minsk";

  today!: IWeatherToday;
  fiveDays!: IFiveDaysForecast;

  fiveDaysInfo: IListForecast[] = [];

  weatherHourly: IListForecast[] = [];

  cityNameError!: any;

  isWeatherTodayVisible: boolean = false;
  isWeatherFiveDaysVisible: boolean = false;

  constructor(private weatherService: WeatherService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.weatherToday();
    this.fiveDaysForecast();
  }

  weatherToday() {
    if (this.inputValue) {
      this.isWeatherTodayVisible = true;
      this.isWeatherFiveDaysVisible = false;
      this.weatherService.getWeatherToday(this.inputValue).subscribe((today: IWeatherToday) => {
        this.today = today;
        // console.log(today);
      }, (err: any) => {
        this.cityNameError = err.error;
        // console.log(this.cityNameError);
        this.dialog.open(WeatherErrorDialogComponent, {
          width: "30%",
          data: this.cityNameError
        });
      })
    }
  }

  fiveDaysForecast() {
    if (this.inputValue) {
      this.weatherService.getFiveDaysForecast(this.inputValue).subscribe((fiveDays: IFiveDaysForecast) => {
        this.fiveDays = fiveDays;
        // console.log(fiveDays);
      })
    }
    this.inputValue = "";
  }

  showWeatherFiveDays() {
    this.fiveDaysInfo = [];
    this.fiveDaysInfo.push(this.fiveDays.list[0]);
    for (let i = 1; i < this.fiveDays.list.length; i++) {
        if (this.fiveDays.list[i].dt_txt.includes("15:00:00") && this.fiveDays.list[0].dt_txt.split(" ")[0] !== this.fiveDays.list[i].dt_txt.split(" ")[0]) {
            this.fiveDaysInfo.push(this.fiveDays.list[i]);
        }
    }
    if (this.fiveDaysInfo.length > 5) {
        this.fiveDaysInfo.shift();
    }
    // console.log(this.fiveDaysInfo);
    this.isWeatherTodayVisible = false;
    this.isWeatherFiveDaysVisible = true;
  }

  showWeatherToday() {
    this.isWeatherTodayVisible = true;
    this.isWeatherFiveDaysVisible = false;
  }

  showWeatherHourly(day: any) {
    this.weatherHourly = [];
    for (let time of this.fiveDays.list) {
      if (day.dt_txt.split(" ")[0] == time.dt_txt.split(" ")[0]) {
          this.weatherHourly.push(time);
      }
    }
    // console.log(this.weatherHourly);
    this.dialog.open(WeatherHourlyDialogComponent, {
      width: "100%",
      data: this.weatherHourly
    });
  }

}
