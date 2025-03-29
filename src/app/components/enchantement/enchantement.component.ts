import { Component } from '@angular/core';
import { AlternativeItemComponent } from '../../reusables/alternative-item/alternative-item.component';

@Component({
  selector: 'app-enchantement',
  standalone: true,
  imports: [AlternativeItemComponent],
  templateUrl: './enchantement.component.html',
  styleUrl: './enchantement.component.css'
})
export class EnchantementComponent {

  imgExLardanteUrl = "https://i.imgur.com/4mfyTN7.png";
  rune_blue = "https://i.imgur.com/JxOgeS2.png";
  rune_red = "https://i.imgur.com/BgBfeOz.png";
  rune_green ="https://i.imgur.com/fvj6nMG.png";
  rune_yellow ="https://i.imgur.com/dHwNhWQ.png";
}
