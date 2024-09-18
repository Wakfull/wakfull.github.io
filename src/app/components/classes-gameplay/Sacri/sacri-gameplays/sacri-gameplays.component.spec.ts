import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacriGameplaysComponent } from './sacri-gameplays.component';

describe('SacriGameplaysComponent', () => {
  let component: SacriGameplaysComponent;
  let fixture: ComponentFixture<SacriGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SacriGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacriGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
