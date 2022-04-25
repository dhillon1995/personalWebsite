import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyDashPageComponent } from './energy-dash-page.component';

describe('EnergyDashPageComponent', () => {
  let component: EnergyDashPageComponent;
  let fixture: ComponentFixture<EnergyDashPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyDashPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyDashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
