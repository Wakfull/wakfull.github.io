import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsaBasicComponent } from './osa-basic.component';

describe('OsaBasicComponent', () => {
  let component: OsaBasicComponent;
  let fixture: ComponentFixture<OsaBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsaBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsaBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
