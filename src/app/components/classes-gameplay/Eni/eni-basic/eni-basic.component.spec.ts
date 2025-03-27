import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniBasicComponent } from './eni-basic.component';

describe('EniBasicComponent', () => {
  let component: EniBasicComponent;
  let fixture: ComponentFixture<EniBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EniBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EniBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
