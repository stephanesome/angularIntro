import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TempConverterComponent} from "./temp-converter/temp-converter.component";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, TempConverterComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
