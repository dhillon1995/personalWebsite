import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPlannerPageComponent } from './trip-planner-page.component';

describe('TripPlannerPageComponent', () => {
  let component: TripPlannerPageComponent;
  let fixture: ComponentFixture<TripPlannerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPlannerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPlannerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
