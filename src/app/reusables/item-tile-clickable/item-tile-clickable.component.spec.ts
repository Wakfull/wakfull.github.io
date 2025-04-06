import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTileClickableComponent } from './item-tile-clickable.component';

describe('ItemTileClickableComponent', () => {
  let component: ItemTileClickableComponent;
  let fixture: ComponentFixture<ItemTileClickableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTileClickableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTileClickableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
