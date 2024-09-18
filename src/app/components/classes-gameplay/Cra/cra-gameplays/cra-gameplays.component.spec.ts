import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraGameplaysComponent } from './cra-gameplays.component';

describe('CraGameplaysComponent', () => {
  let component: CraGameplaysComponent;
  let fixture: ComponentFixture<CraGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
