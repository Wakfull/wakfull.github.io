import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stuffs170Component } from './stuffs170.component';

describe('Stuffs170Component', () => {
  let component: Stuffs170Component;
  let fixture: ComponentFixture<Stuffs170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stuffs170Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stuffs170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
