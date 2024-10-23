import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierlistMakerComponent } from './tierlist-maker.component';

describe('TierlistMakerComponent', () => {
  let component: TierlistMakerComponent;
  let fixture: ComponentFixture<TierlistMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierlistMakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TierlistMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
