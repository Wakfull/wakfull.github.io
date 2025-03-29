import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alternative-item',
  standalone: true,
  imports: [],
  templateUrl: './alternative-item.component.html',
  styleUrl: './alternative-item.component.css'
})
export class AlternativeItemComponent {

  placeholder_image = "/assets/images/placeholder_512.jpg";
  missing_image_text = "Image not available";

  @Input() itemName?: string;
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  @Input() itemDesc?: string;
}

