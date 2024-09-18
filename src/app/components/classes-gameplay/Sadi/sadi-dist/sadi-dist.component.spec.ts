import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadiDistComponent } from './sadi-dist.component';

describe('SadiDistComponent', () => {
  let component: SadiDistComponent;
  let fixture: ComponentFixture<SadiDistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SadiDistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadiDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
