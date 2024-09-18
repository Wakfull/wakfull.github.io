import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcaDistComponent } from './eca-dist.component';

describe('EcaDistComponent', () => {
  let component: EcaDistComponent;
  let fixture: ComponentFixture<EcaDistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcaDistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcaDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
