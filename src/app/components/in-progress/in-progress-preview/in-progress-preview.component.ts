import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-in-progress-preview',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './in-progress-preview.component.html',
  styleUrl: './in-progress-preview.component.css'
})
export class InProgressPreviewComponent {
  @Input() title?:string;
  @Input() description?:string;
  @Input() link?: string;
  @Input() backgroundImage?:string;

  defaultTitle:string = "";
  defaultDescription:string = "";
  defaultLink:string = "/404";
  defaultImage:string = ""; // TODO : Preferably a local image.
}
