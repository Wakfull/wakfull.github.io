import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnuGameplaysComponent } from './enu-gameplays.component';

describe('EnuGameplaysComponent', () => {
  let component: EnuGameplaysComponent;
  let fixture: ComponentFixture<EnuGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnuGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnuGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
