import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcaBasicComponent } from './eca-basic.component';

describe('EcaBasicComponent', () => {
  let component: EcaBasicComponent;
  let fixture: ComponentFixture<EcaBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcaBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcaBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
