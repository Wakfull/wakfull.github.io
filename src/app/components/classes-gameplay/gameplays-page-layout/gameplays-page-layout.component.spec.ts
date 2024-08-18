import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplaysPageLayoutComponent } from './gameplays-page-layout.component';

describe('GameplaysPageLayoutComponent', () => {
  let component: GameplaysPageLayoutComponent;
  let fixture: ComponentFixture<GameplaysPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplaysPageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameplaysPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
