import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToStreamComponent } from './how-to-stream.component';

describe('HowToStreamComponent', () => {
  let component: HowToStreamComponent;
  let fixture: ComponentFixture<HowToStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToStreamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
