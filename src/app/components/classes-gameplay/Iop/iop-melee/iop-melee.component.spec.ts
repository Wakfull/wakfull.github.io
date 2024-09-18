import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopMeleeComponent } from './iop-melee.component';

describe('IopMeleeComponent', () => {
  let component: IopMeleeComponent;
  let fixture: ComponentFixture<IopMeleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IopMeleeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IopMeleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
