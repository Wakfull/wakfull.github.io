import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-generic-article',
    imports: [],
    templateUrl: './generic-article.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
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
