import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XelorDistZoneComponent } from './xelor-dist-zone.component';

describe('XelorDistZoneComponent', () => {
  let component: XelorDistZoneComponent;
  let fixture: ComponentFixture<XelorDistZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XelorDistZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XelorDistZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
