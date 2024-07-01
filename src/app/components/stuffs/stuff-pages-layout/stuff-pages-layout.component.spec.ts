import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffPagesLayoutComponent } from './stuff-pages-layout.component';

describe('StuffPagesLayoutComponent', () => {
  let component: StuffPagesLayoutComponent;
  let fixture: ComponentFixture<StuffPagesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffPagesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffPagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
