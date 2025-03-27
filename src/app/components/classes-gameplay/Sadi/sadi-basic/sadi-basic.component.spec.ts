import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadiBasicComponent } from './sadi-basic.component';

describe('SadiBasicComponent', () => {
  let component: SadiBasicComponent;
  let fixture: ComponentFixture<SadiBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SadiBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadiBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
