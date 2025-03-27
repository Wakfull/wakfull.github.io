import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SramBasicComponent } from './sram-basic.component';

describe('SramBasicComponent', () => {
  let component: SramBasicComponent;
  let fixture: ComponentFixture<SramBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SramBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SramBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
