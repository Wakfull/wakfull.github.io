import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamDptZoneComponent } from './steam-dpt-zone.component';

describe('SteamDptZoneComponent', () => {
  let component: SteamDptZoneComponent;
  let fixture: ComponentFixture<SteamDptZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamDptZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamDptZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
