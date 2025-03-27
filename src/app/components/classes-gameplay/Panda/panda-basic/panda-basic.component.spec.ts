import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaBasicComponent } from './panda-basic.component';

describe('PandaBasicComponent', () => {
  let component: PandaBasicComponent;
  let fixture: ComponentFixture<PandaBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandaBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
