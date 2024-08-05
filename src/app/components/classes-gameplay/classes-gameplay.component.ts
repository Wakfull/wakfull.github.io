import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesPreviewComponent } from './classes-preview/classes-preview.component';

@Component({
  selector: 'app-classes-gameplay',
  standalone: true,
  imports: [RouterModule, CommonModule,ClassesPreviewComponent],
  templateUrl: './classes-gameplay.component.html',
  styleUrl: './classes-gameplay.component.css'
})
export class ClassesGameplayComponent {
  thinkingElio = "https://i.imgur.com/WoWn4Bn.png";
  osaIconUrl ="https://i.imgur.com/UKq7xIP.jpeg";

  previews: {title?:string,description?:string, link?:string, backgroundImage?:string}[] = [
      { title: "Elio CATACLYSME", link: "/elioMelee", backgroundImage : this.thinkingElio},
      { title: "Elio Distance", link: "/elioDist", backgroundImage : this.thinkingElio},
      { title: "Osa DRAGON", link: "/osaDragon", backgroundImage : this.osaIconUrl},
      { title: "Osa Support", link: "/osaSupport", backgroundImage : this.osaIconUrl},
    ]
  }
  
