import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiftPageLayoutComponent } from './rift-page-layout.component';

describe('RiftPageLayoutComponent', () => {
  let component: RiftPageLayoutComponent;
  let fixture: ComponentFixture<RiftPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiftPageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiftPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
