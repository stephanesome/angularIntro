import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent {
  celsiusValue = 0;
  fahrenheitValue = 0;

  convertCelsius(value: string): void {
    this.celsiusValue = Number(value);
    this.fahrenheitValue = ((this.celsiusValue * 9) / 5) + 32;
  }

  convertFahrenheit(value: string): void {
    this.fahrenheitValue = Number(value);
    this.celsiusValue = ((this.fahrenheitValue - 32) * 5) / 9;
  }
}
