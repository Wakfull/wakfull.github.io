import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcaSupportComponent } from './eca-support.component';

describe('EcaSupportComponent', () => {
  let component: EcaSupportComponent;
  let fixture: ComponentFixture<EcaSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcaSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcaSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
