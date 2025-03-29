import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alternative-item',
  standalone: true,
  imports: [],
  templateUrl: './alternative-item.component.html',
  styleUrl: './alternative-item.component.css'
})
export class AlternativeItemComponent {
  @Input() itemName?: string;
  @Input() imageUrl: string = "/assets/images/placeholder_512.jpg";
  @Input() imageAlt: string= "Image not available";
  @Input() itemDesc?: string;
}

