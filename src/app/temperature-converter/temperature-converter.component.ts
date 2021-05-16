import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent implements OnInit {
  farenheit = 0;
  celcius = 0;

  constructor() {}

  ngOnInit() {}

  updateCeli() {
    this.farenheit = (this.celcius * 9) / 5 + 32;
  }

  updateFaren() {
    this.celcius = this.farenheit - (32 * 5) / 9;
  }
}
