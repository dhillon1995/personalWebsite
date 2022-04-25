import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgedCarbonPageComponent } from './forged-carbon-page.component';

describe('ForgedCarbonPageComponent', () => {
  let component: ForgedCarbonPageComponent;
  let fixture: ComponentFixture<ForgedCarbonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgedCarbonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgedCarbonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
