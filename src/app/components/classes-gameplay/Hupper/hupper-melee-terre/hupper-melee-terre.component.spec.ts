import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HupperMeleeTerreComponent } from './hupper-melee-terre.component';

describe('HupperMeleeTerreComponent', () => {
  let component: HupperMeleeTerreComponent;
  let fixture: ComponentFixture<HupperMeleeTerreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HupperMeleeTerreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HupperMeleeTerreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
