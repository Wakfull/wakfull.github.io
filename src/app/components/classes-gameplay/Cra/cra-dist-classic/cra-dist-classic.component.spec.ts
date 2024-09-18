import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraDistClassicComponent } from './cra-dist-classic.component';

describe('CraDistClassicComponent', () => {
  let component: CraDistClassicComponent;
  let fixture: ComponentFixture<CraDistClassicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraDistClassicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraDistClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
