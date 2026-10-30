import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AlternativeItemComponent } from '../../../reusables/alternative-item/alternative-item.component';

@Component({
    selector: 'app-before-gearing-up',
    imports: [AlternativeItemComponent],
    templateUrl: './before-gearing-up.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './before-gearing-up.component.css'
})
export class BeforeGearingUpComponent {

  imgExLardanteUrl = "https://i.imgur.com/4mfyTN7.png";
}
