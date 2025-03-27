import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoubBasicComponent } from './roub-basic.component';

describe('RoubBasicComponent', () => {
  let component: RoubBasicComponent;
  let fixture: ComponentFixture<RoubBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoubBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoubBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
