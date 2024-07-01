import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeGearingUpComponent } from './before-gearing-up.component';

describe('BeforeGearingUpComponent', () => {
  let component: BeforeGearingUpComponent;
  let fixture: ComponentFixture<BeforeGearingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeGearingUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforeGearingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
