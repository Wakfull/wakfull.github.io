import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcaGameplaysComponent } from './eca-gameplays.component';

describe('EcaGameplaysComponent', () => {
  let component: EcaGameplaysComponent;
  let fixture: ComponentFixture<EcaGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcaGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcaGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
