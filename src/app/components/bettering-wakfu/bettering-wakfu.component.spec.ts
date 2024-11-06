import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetteringWakfuComponent } from './bettering-wakfu.component';

describe('BetteringWakfuComponent', () => {
  let component: BetteringWakfuComponent;
  let fixture: ComponentFixture<BetteringWakfuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetteringWakfuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetteringWakfuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
