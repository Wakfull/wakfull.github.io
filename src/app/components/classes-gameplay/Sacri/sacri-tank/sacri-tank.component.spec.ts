import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacriTankComponent } from './sacri-tank.component';

describe('SacriTankComponent', () => {
  let component: SacriTankComponent;
  let fixture: ComponentFixture<SacriTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SacriTankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacriTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
