import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonPageComponent } from './carbon-page.component';

describe('CarbonPageComponent', () => {
  let component: CarbonPageComponent;
  let fixture: ComponentFixture<CarbonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
