import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFiveDaysForecast, IWeatherToday } from '../model/weather-app.model';

const URL_API = "https://api.openweathermap.org";
const API_KEY = "1c99c168e5f32cae7dc01015c0038525";

let lang: string = "en";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherToday(city: string): Observable<IWeatherToday> {
    return this.http.get<IWeatherToday>(`${URL_API}/data/2.5/weather?q=${city}&limit=1&appid=${API_KEY}&units=metric&lang=${lang}`);
  }

  getFiveDaysForecast(city: string): Observable<IFiveDaysForecast> {
    return this.http.get<IFiveDaysForecast>(`${URL_API}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`);
  }

}
