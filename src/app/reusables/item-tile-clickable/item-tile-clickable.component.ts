import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-tile-clickable',
  standalone: true,
  imports: [],
  templateUrl: './item-tile-clickable.component.html',
  styleUrl: './item-tile-clickable.component.css'
})
export class ItemTileClickableComponent {

  placeholder_image = "/assets/images/placeholder_512.jpg";
  missing_image_text = "Image not available";

  @Input() url: string = "/404";
  @Input() itemName?: string;
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  @Input() itemDesc?: string;

}
