import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressPreviewComponent } from './in-progress-preview.component';

describe('InProgressPreviewComponent', () => {
  let component: InProgressPreviewComponent;
  let fixture: ComponentFixture<InProgressPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InProgressPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProgressPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
