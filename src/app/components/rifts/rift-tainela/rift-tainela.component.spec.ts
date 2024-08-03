import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiftTainelaComponent } from './rift-tainela.component';

describe('RiftTainelaComponent', () => {
  let component: RiftTainelaComponent;
  let fixture: ComponentFixture<RiftTainelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiftTainelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiftTainelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
