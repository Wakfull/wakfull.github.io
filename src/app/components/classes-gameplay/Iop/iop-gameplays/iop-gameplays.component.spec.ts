import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopGameplaysComponent } from './iop-gameplays.component';

describe('IopGameplaysComponent', () => {
  let component: IopGameplaysComponent;
  let fixture: ComponentFixture<IopGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IopGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IopGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
