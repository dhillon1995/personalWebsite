import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageControlPageComponent } from './garage-control-page.component';

describe('GarageControlPageComponent', () => {
  let component: GarageControlPageComponent;
  let fixture: ComponentFixture<GarageControlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageControlPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageControlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
