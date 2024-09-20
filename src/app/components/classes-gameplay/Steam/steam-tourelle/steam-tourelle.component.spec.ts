import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamTourelleComponent } from './steam-tourelle.component';

describe('SteamTourelleComponent', () => {
  let component: SteamTourelleComponent;
  let fixture: ComponentFixture<SteamTourelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamTourelleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamTourelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
