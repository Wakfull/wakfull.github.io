import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-elio-basic',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './elio-basic.component.html',
  styleUrl: './elio-basic.component.css'
})
export class ElioBasicComponent {

  
  copyToClipboard(textToCopy = "No text to copy."){
		navigator.clipboard.writeText(textToCopy); 
	}
  
}
