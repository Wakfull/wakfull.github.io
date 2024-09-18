import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FecaGameplaysComponent } from './feca-gameplays.component';

describe('FecaGameplaysComponent', () => {
  let component: FecaGameplaysComponent;
  let fixture: ComponentFixture<FecaGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FecaGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FecaGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
