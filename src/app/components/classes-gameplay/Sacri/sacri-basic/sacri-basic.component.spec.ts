import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacriBasicComponent } from './sacri-basic.component';

describe('SacriBasicComponent', () => {
  let component: SacriBasicComponent;
  let fixture: ComponentFixture<SacriBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SacriBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacriBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
