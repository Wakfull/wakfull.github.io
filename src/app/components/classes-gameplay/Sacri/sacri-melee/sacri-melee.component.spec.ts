import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacriMeleeComponent } from './sacri-melee.component';

describe('SacriMeleeComponent', () => {
  let component: SacriMeleeComponent;
  let fixture: ComponentFixture<SacriMeleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SacriMeleeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacriMeleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
