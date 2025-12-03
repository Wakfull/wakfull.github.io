import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adventure-guide',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './adventure-guide.component.html',
  styleUrl: './adventure-guide.component.css'
})
export class AdventureGuideComponent {

}
