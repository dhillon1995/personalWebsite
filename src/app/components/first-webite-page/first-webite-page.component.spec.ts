import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWebitePageComponent } from './first-webite-page.component';

describe('FirstWebitePageComponent', () => {
  let component: FirstWebitePageComponent;
  let fixture: ComponentFixture<FirstWebitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWebitePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstWebitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
