import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDTestComponent } from './three-dtest.component';

describe('ThreeDTestComponent', () => {
  let component: ThreeDTestComponent;
  let fixture: ComponentFixture<ThreeDTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
