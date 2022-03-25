import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '@shared/interfaces/weather.interface';
import { WeatherService } from './pages/weather/services/weather.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weatherApp';
  constructor(private readonly weatherSvc: WeatherService) {}
  public weather$!: Observable<WeatherData>;

  public onSearch(city: string): void {
    this.weather$ = this.weatherSvc.getWeatherByname(city);
  }
}
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
