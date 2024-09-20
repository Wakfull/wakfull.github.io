import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZobalDoPouComponent } from './zobal-do-pou.component';

describe('ZobalDoPouComponent', () => {
  let component: ZobalDoPouComponent;
  let fixture: ComponentFixture<ZobalDoPouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZobalDoPouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZobalDoPouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
