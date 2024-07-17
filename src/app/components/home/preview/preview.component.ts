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

  defaultTitle:string = "Sram stole this title, but we're sure it used to be great!";
  defaultDescription:string = "My crumpets, then this description ?! This bloody Sram god can't keep getting away stealing everything ! ";
  defaultLink:string = "/404";
  defaultImage:string = "https://i.imgur.com/wxZRTLQ.png"; // TODO : Preferably a local image.
}
