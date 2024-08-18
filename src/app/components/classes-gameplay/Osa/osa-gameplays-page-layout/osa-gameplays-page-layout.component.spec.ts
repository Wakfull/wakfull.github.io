import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsaGameplaysPageLayoutComponent } from './osa-gameplays-page-layout.component';

describe('OsaGameplaysPageLayoutComponent', () => {
  let component: OsaGameplaysPageLayoutComponent;
  let fixture: ComponentFixture<OsaGameplaysPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsaGameplaysPageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsaGameplaysPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
