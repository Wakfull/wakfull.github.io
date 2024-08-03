import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiftOverviewComponent } from './rift-overview.component';

describe('RiftOverviewComponent', () => {
  let component: RiftOverviewComponent;
  let fixture: ComponentFixture<RiftOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiftOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
