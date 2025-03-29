import { Component } from '@angular/core';
import { AlternativeItemComponent } from '../../../reusables/alternative-item/alternative-item.component';
import { AlternativeItem } from '../../../interfaces/iAlternativeItem';

@Component({
  selector: 'app-before-gearing-up',
  standalone: true,
  imports: [AlternativeItemComponent],
  templateUrl: './before-gearing-up.component.html',
  styleUrl: './before-gearing-up.component.css'
})
export class BeforeGearingUpComponent {

  imgExLardanteUrl = "https://i.imgur.com/4mfyTN7.png";
}
