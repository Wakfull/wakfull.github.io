import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZobalSupportComponent } from './zobal-support.component';

describe('ZobalSupportComponent', () => {
  let component: ZobalSupportComponent;
  let fixture: ComponentFixture<ZobalSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZobalSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZobalSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
