import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XelorDistFeuComponent } from './xelor-dist-feu.component';

describe('XelorDistFeuComponent', () => {
  let component: XelorDistFeuComponent;
  let fixture: ComponentFixture<XelorDistFeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XelorDistFeuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XelorDistFeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
