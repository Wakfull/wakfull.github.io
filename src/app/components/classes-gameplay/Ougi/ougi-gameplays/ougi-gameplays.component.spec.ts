import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OugiGameplaysComponent } from './ougi-gameplays.component';

describe('OugiGameplaysComponent', () => {
  let component: OugiGameplaysComponent;
  let fixture: ComponentFixture<OugiGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OugiGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OugiGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
