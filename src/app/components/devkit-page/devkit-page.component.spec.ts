import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevkitPageComponent } from './devkit-page.component';

describe('DevkitPageComponent', () => {
  let component: DevkitPageComponent;
  let fixture: ComponentFixture<DevkitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevkitPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevkitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
