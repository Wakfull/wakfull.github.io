import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamBasicComponent } from './steam-basic.component';

describe('SteamBasicComponent', () => {
  let component: SteamBasicComponent;
  let fixture: ComponentFixture<SteamBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
