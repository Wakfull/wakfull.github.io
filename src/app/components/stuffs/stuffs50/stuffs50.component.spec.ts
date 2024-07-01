import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stuffs50Component } from './stuffs50.component';

describe('Stuffs50Component', () => {
  let component: Stuffs50Component;
  let fixture: ComponentFixture<Stuffs50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stuffs50Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stuffs50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
