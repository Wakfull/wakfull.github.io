import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalResourcesComponent } from './external-resources.component';

describe('ExternalResourcesComponent', () => {
  let component: ExternalResourcesComponent;
  let fixture: ComponentFixture<ExternalResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
