import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XelorSupportComponent } from './xelor-support.component';

describe('XelorSupportComponent', () => {
  let component: XelorSupportComponent;
  let fixture: ComponentFixture<XelorSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XelorSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XelorSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
