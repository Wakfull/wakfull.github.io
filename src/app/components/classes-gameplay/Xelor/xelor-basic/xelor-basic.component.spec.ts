import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XelorBasicComponent } from './xelor-basic.component';

describe('XelorBasicComponent', () => {
  let component: XelorBasicComponent;
  let fixture: ComponentFixture<XelorBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XelorBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XelorBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
