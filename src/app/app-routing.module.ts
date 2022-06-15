import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherFiveDaysComponent } from './components/weather-five-days/weather-five-days.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';

const routes: Routes = [
  { path: 'today', component: WeatherTodayComponent },
  { path: 'five-days', component: WeatherFiveDaysComponent },
  { path: '', redirectTo: '/today', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
