import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OugiPoisonComponent } from './ougi-poison.component';

describe('OugiPoisonComponent', () => {
  let component: OugiPoisonComponent;
  let fixture: ComponentFixture<OugiPoisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OugiPoisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OugiPoisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
