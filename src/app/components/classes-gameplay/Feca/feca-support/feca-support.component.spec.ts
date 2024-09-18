import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FecaSupportComponent } from './feca-support.component';

describe('FecaSupportComponent', () => {
  let component: FecaSupportComponent;
  let fixture: ComponentFixture<FecaSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FecaSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FecaSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
