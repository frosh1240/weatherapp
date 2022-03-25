import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { WeatherData } from '@app/shared/interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
  @Input() public weather!: WeatherData;
  constructor() {}

  public BASE_URL_IMG = 'http://openweathermap.org/img/wn';

  ngOnInit(): void {}
}
