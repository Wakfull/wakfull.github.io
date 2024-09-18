import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamSupportComponent } from './steam-support.component';

describe('SteamSupportComponent', () => {
  let component: SteamSupportComponent;
  let fixture: ComponentFixture<SteamSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
