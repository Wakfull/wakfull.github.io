import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OugiMeleeComponent } from './ougi-melee.component';

describe('OugiMeleeComponent', () => {
  let component: OugiMeleeComponent;
  let fixture: ComponentFixture<OugiMeleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OugiMeleeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OugiMeleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
