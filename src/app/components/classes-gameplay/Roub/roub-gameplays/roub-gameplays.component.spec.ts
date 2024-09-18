import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoubGameplaysComponent } from './roub-gameplays.component';

describe('RoubGameplaysComponent', () => {
  let component: RoubGameplaysComponent;
  let fixture: ComponentFixture<RoubGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoubGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoubGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
