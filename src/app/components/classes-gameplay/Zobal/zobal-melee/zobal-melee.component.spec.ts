import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZobalMeleeComponent } from './zobal-melee.component';

describe('ZobalMeleeComponent', () => {
  let component: ZobalMeleeComponent;
  let fixture: ComponentFixture<ZobalMeleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZobalMeleeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZobalMeleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
