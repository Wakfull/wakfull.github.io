import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulationComponent } from './modulation.component';

describe('ModulationComponent', () => {
  let component: ModulationComponent;
  let fixture: ComponentFixture<ModulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
