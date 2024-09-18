import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniPoisonComponent } from './eni-poison.component';

describe('EniPoisonComponent', () => {
  let component: EniPoisonComponent;
  let fixture: ComponentFixture<EniPoisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EniPoisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EniPoisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
