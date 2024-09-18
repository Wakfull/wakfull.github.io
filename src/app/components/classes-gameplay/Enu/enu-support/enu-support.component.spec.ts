import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnuSupportComponent } from './enu-support.component';

describe('EnuSupportComponent', () => {
  let component: EnuSupportComponent;
  let fixture: ComponentFixture<EnuSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnuSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnuSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
