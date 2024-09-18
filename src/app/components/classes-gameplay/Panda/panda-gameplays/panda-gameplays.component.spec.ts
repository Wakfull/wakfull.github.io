import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaGameplaysComponent } from './panda-gameplays.component';

describe('PandaGameplaysComponent', () => {
  let component: PandaGameplaysComponent;
  let fixture: ComponentFixture<PandaGameplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaGameplaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandaGameplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
