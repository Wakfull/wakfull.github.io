import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stuffs80Component } from './stuffs80.component';

describe('Stuffs80Component', () => {
  let component: Stuffs80Component;
  let fixture: ComponentFixture<Stuffs80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stuffs80Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stuffs80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
