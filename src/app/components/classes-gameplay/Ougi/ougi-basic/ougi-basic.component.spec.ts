import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OugiBasicComponent } from './ougi-basic.component';

describe('OugiBasicComponent', () => {
  let component: OugiBasicComponent;
  let fixture: ComponentFixture<OugiBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OugiBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OugiBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
