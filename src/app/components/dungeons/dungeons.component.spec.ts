import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonsComponent } from './dungeons.component';

describe('DungeonsComponent', () => {
  let component: DungeonsComponent;
  let fixture: ComponentFixture<DungeonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DungeonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DungeonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
