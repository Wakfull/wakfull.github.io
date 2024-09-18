import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HupperGameplaysComponent } from './hupper-gameplays.component';

describe('HupperGameplaysComponent', () => {
  let component: HupperGameplaysComponent;
  let fixture: ComponentFixture<HupperGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HupperGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HupperGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
