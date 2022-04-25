import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareCardsComponent } from './hardware-cards.component';

describe('HardwareCardsComponent', () => {
  let component: HardwareCardsComponent;
  let fixture: ComponentFixture<HardwareCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
