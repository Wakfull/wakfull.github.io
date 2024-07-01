import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stuffs20Component } from './stuffs20.component';

describe('Stuffs20Component', () => {
  let component: Stuffs20Component;
  let fixture: ComponentFixture<Stuffs20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stuffs20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stuffs20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
