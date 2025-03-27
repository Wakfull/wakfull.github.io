import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZobalBasicComponent } from './zobal-basic.component';

describe('ZobalBasicComponent', () => {
  let component: ZobalBasicComponent;
  let fixture: ComponentFixture<ZobalBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZobalBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZobalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
