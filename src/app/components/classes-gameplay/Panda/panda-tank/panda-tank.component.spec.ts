import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaTankComponent } from './panda-tank.component';

describe('PandaTankComponent', () => {
  let component: PandaTankComponent;
  let fixture: ComponentFixture<PandaTankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaTankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandaTankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
