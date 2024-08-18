import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsaGameplaysComponent } from './osa-gameplays.component';

describe('OsaGameplaysComponent', () => {
  let component: OsaGameplaysComponent;
  let fixture: ComponentFixture<OsaGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsaGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsaGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
