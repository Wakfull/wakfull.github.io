import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadiSupportComponent } from './sadi-support.component';

describe('SadiSupportComponent', () => {
  let component: SadiSupportComponent;
  let fixture: ComponentFixture<SadiSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SadiSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadiSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
