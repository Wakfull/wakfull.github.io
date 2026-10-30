import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-elio-melee',
    imports: [],
    templateUrl: './elio-melee.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './elio-melee.component.css'
})
export class ElioMeleeComponent {

  copyToClipboard(textToCopy = "No text to copy."){
		navigator.clipboard.writeText(textToCopy); 
	}
  
}
