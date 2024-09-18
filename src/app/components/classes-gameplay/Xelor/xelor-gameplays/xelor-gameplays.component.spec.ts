import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XelorGameplaysComponent } from './xelor-gameplays.component';

describe('XelorGameplaysComponent', () => {
  let component: XelorGameplaysComponent;
  let fixture: ComponentFixture<XelorGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XelorGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XelorGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
