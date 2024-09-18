import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamGameplaysComponent } from './steam-gameplays.component';

describe('SteamGameplaysComponent', () => {
  let component: SteamGameplaysComponent;
  let fixture: ComponentFixture<SteamGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
