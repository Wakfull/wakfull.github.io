import { Component } from '@angular/core';

@Component({
  selector: 'app-elio-melee',
  standalone: true,
  imports: [],
  templateUrl: './elio-melee.component.html',
  styleUrl: './elio-melee.component.css'
})
export class ElioMeleeComponent {

  copyToClipboard(textToCopy = "No text to copy."){
		navigator.clipboard.writeText(textToCopy); 
	}
  
}
