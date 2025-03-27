import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FecaBasicComponent } from './feca-basic.component';

describe('FecaBasicComponent', () => {
  let component: FecaBasicComponent;
  let fixture: ComponentFixture<FecaBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FecaBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FecaBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
