import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WakfuComponent } from './wakfu.component';

describe('WakfuComponent', () => {
  let component: WakfuComponent;
  let fixture: ComponentFixture<WakfuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WakfuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WakfuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
