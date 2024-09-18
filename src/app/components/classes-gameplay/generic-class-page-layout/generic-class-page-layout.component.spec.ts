import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericClassPageLayoutComponent } from './generic-class-page-layout.component';

describe('GenericClassPageLayoutComponent', () => {
  let component: GenericClassPageLayoutComponent;
  let fixture: ComponentFixture<GenericClassPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericClassPageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericClassPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
