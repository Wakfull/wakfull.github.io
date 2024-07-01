import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stuffs200Component } from './stuffs200.component';

describe('Stuffs200Component', () => {
  let component: Stuffs200Component;
  let fixture: ComponentFixture<Stuffs200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stuffs200Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stuffs200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
