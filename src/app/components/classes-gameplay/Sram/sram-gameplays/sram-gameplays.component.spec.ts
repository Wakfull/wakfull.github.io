import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SramGameplaysComponent } from './sram-gameplays.component';

describe('SramGameplaysComponent', () => {
  let component: SramGameplaysComponent;
  let fixture: ComponentFixture<SramGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SramGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SramGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
