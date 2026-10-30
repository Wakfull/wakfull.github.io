import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-preview',
    imports: [RouterModule, CommonModule],
    templateUrl: './preview.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './preview.component.css'
})
export class PreviewComponent {
  @Input() title?:string;
  @Input() description?:string;
  @Input() link?: string;
  @Input() backgroundImage?:string;

  defaultTitle:string = "";
  defaultDescription:string = "";
  defaultLink:string = "/404";
  defaultImage:string = ""; // TODO : Preferably a local image.
}
