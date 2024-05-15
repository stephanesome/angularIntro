import { Component } from '@angular/core';
import { TempConverterComponent } from './temp-converter/temp-converter.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [TempConverterComponent]
})
export class AppComponent {
  title = 'lab1-temp-converter';
}
