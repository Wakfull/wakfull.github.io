import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniSupportComponent } from './eni-support.component';

describe('EniSupportComponent', () => {
  let component: EniSupportComponent;
  let fixture: ComponentFixture<EniSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EniSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EniSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
