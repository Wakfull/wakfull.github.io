import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZobalGameplaysComponent } from './zobal-gameplays.component';

describe('ZobalGameplaysComponent', () => {
  let component: ZobalGameplaysComponent;
  let fixture: ComponentFixture<ZobalGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZobalGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZobalGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
