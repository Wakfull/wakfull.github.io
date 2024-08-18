import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplaysNavbarComponent } from './gameplays-navbar.component';

describe('GameplaysNavbarComponent', () => {
  let component: GameplaysNavbarComponent;
  let fixture: ComponentFixture<GameplaysNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplaysNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameplaysNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
