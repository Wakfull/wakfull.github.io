import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnuMeleeComponent } from './enu-melee.component';

describe('EnuMeleeComponent', () => {
  let component: EnuMeleeComponent;
  let fixture: ComponentFixture<EnuMeleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnuMeleeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnuMeleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
