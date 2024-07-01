import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stuffs140Component } from './stuffs140.component';

describe('Stuffs140Component', () => {
  let component: Stuffs140Component;
  let fixture: ComponentFixture<Stuffs140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stuffs140Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stuffs140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
