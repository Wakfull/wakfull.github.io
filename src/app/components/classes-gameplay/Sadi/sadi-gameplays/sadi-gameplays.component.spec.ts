import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadiGameplaysComponent } from './sadi-gameplays.component';

describe('SadiGameplaysComponent', () => {
  let component: SadiGameplaysComponent;
  let fixture: ComponentFixture<SadiGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SadiGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadiGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
