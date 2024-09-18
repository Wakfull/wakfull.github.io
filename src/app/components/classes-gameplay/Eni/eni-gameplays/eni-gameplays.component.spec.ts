import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniGameplaysComponent } from './eni-gameplays.component';

describe('EniGameplaysComponent', () => {
  let component: EniGameplaysComponent;
  let fixture: ComponentFixture<EniGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EniGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EniGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
