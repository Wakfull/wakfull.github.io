import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeItemComponent } from './alternative-item.component';

describe('AlternativeItemComponent', () => {
  let component: AlternativeItemComponent;
  let fixture: ComponentFixture<AlternativeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternativeItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternativeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
