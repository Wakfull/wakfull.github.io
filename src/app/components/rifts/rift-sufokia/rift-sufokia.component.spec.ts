import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiftSufokiaComponent } from './rift-sufokia.component';

describe('RiftSufokiaComponent', () => {
  let component: RiftSufokiaComponent;
  let fixture: ComponentFixture<RiftSufokiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiftSufokiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiftSufokiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
