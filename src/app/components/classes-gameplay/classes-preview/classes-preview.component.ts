import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-classes-preview',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './classes-preview.component.html',
  styleUrl: './classes-preview.component.css'
})
export class ClassesPreviewComponent {
  @Input() title?:string;
  @Input() description?:string;
  @Input() link?: string;
  @Input() backgroundImage?:string;

  defaultTitle:string = "";
  defaultDescription:string = "";
  defaultLink:string = "/404";
  defaultImage:string = ""; // TODO : Preferably a local image.
  }
