import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElioGameplaysComponent } from './elio-gameplays.component';

describe('ElioGameplaysComponent', () => {
  let component: ElioGameplaysComponent;
  let fixture: ComponentFixture<ElioGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElioGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElioGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
