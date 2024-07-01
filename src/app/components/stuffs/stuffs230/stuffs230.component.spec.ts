import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stuffs230Component } from './stuffs230.component';

describe('Stuffs230Component', () => {
  let component: Stuffs230Component;
  let fixture: ComponentFixture<Stuffs230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stuffs230Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stuffs230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
