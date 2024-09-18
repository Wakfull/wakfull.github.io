import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HupperFullElemComponent } from './hupper-full-elem.component';

describe('HupperFullElemComponent', () => {
  let component: HupperFullElemComponent;
  let fixture: ComponentFixture<HupperFullElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HupperFullElemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HupperFullElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
