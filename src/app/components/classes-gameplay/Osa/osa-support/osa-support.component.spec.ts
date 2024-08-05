import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsaSupportComponent } from './osa-support.component';

describe('OsaSupportComponent', () => {
  let component: OsaSupportComponent;
  let fixture: ComponentFixture<OsaSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsaSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsaSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
