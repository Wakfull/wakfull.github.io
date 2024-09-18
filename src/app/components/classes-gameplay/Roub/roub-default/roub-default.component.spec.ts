import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoubDefaultComponent } from './roub-default.component';

describe('RoubDefaultComponent', () => {
  let component: RoubDefaultComponent;
  let fixture: ComponentFixture<RoubDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoubDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoubDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
