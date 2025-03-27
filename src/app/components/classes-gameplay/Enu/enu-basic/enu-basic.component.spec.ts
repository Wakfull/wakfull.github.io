import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnuBasicComponent } from './enu-basic.component';

describe('EnuBasicComponent', () => {
  let component: EnuBasicComponent;
  let fixture: ComponentFixture<EnuBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnuBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnuBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
