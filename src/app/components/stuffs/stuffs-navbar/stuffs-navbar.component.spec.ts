import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffsNavbarComponent } from './stuffs-navbar.component';

describe('StuffsNavbarComponent', () => {
  let component: StuffsNavbarComponent;
  let fixture: ComponentFixture<StuffsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffsNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
