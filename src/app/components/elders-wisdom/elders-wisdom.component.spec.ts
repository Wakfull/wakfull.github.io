import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldersWisdomComponent } from './elders-wisdom.component';

describe('EldersWisdomComponent', () => {
  let component: EldersWisdomComponent;
  let fixture: ComponentFixture<EldersWisdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EldersWisdomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EldersWisdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
