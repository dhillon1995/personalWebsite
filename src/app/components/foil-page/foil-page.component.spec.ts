import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoilPageComponent } from './foil-page.component';

describe('FoilPageComponent', () => {
  let component: FoilPageComponent;
  let fixture: ComponentFixture<FoilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoilPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
