import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraBasicComponent } from './cra-basic.component';

describe('CraBasicComponent', () => {
  let component: CraBasicComponent;
  let fixture: ComponentFixture<CraBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
