import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElioGameplaysPageLayoutComponent } from './elio-gameplays-page-layout.component';

describe('ElioGameplaysPageLayoutComponent', () => {
  let component: ElioGameplaysPageLayoutComponent;
  let fixture: ComponentFixture<ElioGameplaysPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElioGameplaysPageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElioGameplaysPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
