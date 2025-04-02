import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOnLinuxComponent } from './game-on-linux.component';

describe('GameOnLinuxComponent', () => {
  let component: GameOnLinuxComponent;
  let fixture: ComponentFixture<GameOnLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOnLinuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameOnLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
