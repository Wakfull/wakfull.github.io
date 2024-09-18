import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonPreviewComponent } from './dungeon-preview.component';

describe('DungeonPreviewComponent', () => {
  let component: DungeonPreviewComponent;
  let fixture: ComponentFixture<DungeonPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DungeonPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DungeonPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
