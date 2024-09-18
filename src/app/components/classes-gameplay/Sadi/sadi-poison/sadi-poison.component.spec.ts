import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadiPoisonComponent } from './sadi-poison.component';

describe('SadiPoisonComponent', () => {
  let component: SadiPoisonComponent;
  let fixture: ComponentFixture<SadiPoisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SadiPoisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadiPoisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
