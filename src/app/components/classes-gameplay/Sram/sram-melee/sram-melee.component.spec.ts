import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SramMeleeComponent } from './sram-melee.component';

describe('SramMeleeComponent', () => {
  let component: SramMeleeComponent;
  let fixture: ComponentFixture<SramMeleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SramMeleeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SramMeleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
