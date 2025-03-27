import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HupperBasicComponent } from './hupper-basic.component';

describe('HupperBasicComponent', () => {
  let component: HupperBasicComponent;
  let fixture: ComponentFixture<HupperBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HupperBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HupperBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
