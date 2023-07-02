import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempConverterComponent } from './temp-converter.component';

describe('TempConverterComponent', () => {
  let component: TempConverterComponent;
  let fixture: ComponentFixture<TempConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempConverterComponent]
    });
    fixture = TestBed.createComponent(TempConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert 0 celsius to 32 fahrenheit', () => {
    const tempval = '0';
    component.convertCelsius(tempval);
    expect(component.fahrenheitValue).toBeCloseTo(32);
  });

  it('should convert -100 fahrenheit to -73.33 celsius', () => {
    const tempval = '-100';
    component.convertFahrenheit(tempval);
    expect(component.celsiusValue).toBeCloseTo(-73.33);
  });
});
