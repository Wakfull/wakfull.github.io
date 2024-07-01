import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stuffs110Component } from './stuffs110.component';

describe('Stuffs110Component', () => {
  let component: Stuffs110Component;
  let fixture: ComponentFixture<Stuffs110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stuffs110Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stuffs110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
