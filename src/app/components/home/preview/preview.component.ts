import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './preview.component.html',
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
