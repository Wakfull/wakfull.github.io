import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesGameplayComponent } from './classes-gameplay.component';

describe('ClassesGameplayComponent', () => {
  let component: ClassesGameplayComponent;
  let fixture: ComponentFixture<ClassesGameplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesGameplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
