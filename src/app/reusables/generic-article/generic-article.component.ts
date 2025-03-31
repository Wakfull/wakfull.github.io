import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-article',
  standalone: true,
  imports: [],
  templateUrl: './generic-article.component.html',
  styleUrl: './generic-article.component.css'
})
export class GenericArticleComponent {

  @Input() title: string = 'No title given.';
  @Input() content: string = 'No content to display.';
  @Input() isOpen: boolean = false;
  
  toggleContent() {
    this.isOpen = !this.isOpen;
  }
}
