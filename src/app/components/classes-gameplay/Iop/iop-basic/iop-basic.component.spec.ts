import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IopBasicComponent } from './iop-basic.component';

describe('IopBasicComponent', () => {
  let component: IopBasicComponent;
  let fixture: ComponentFixture<IopBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IopBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IopBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
