import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, PreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  bouftouRoyalUrl = "https://i.imgur.com/CUl0FDk.png";
  royalMoogrUrl ="https://i.imgur.com/DNyK0ep.png";
  dardevilImageUrl = "https://i.imgur.com/RvZ3Ndb.png";
  magmogImageUrl ="https://i.imgur.com/JR9e88l.png"


  previews: {title?:string,description?:string, link?:string, backgroundImage?:string}[] = [
    { title: 'Stuffs 20', description: "Besoin de stuffs pour débuter, reprendre ou tryhard ? Commence  ici !", link: '/stuff20', backgroundImage: this.bouftouRoyalUrl},
    { title: 'Stuffs 50', description: "Le donjon Moogr et la tour minérale n'attendent que toi !", link: '/stuff50', backgroundImage: this.royalMoogrUrl},
    { title: 'Stuffs 110', description: "Pour aborder sereinement les BU et les super-vilains !", link: '/stuff110', backgroundImage: this.magmogImageUrl },
  ];
  
}
