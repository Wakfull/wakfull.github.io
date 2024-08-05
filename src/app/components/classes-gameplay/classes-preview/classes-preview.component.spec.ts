import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesPreviewComponent } from './classes-preview.component';

describe('ClassesPreviewComponent', () => {
  let component: ClassesPreviewComponent;
  let fixture: ComponentFixture<ClassesPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
