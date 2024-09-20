import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MimicsComponent } from './mimics.component';

describe('MimicsComponent', () => {
  let component: MimicsComponent;
  let fixture: ComponentFixture<MimicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MimicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MimicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
