import { Component } from '@angular/core';
import { AlternativeItemComponent } from '../../reusables/alternative-item/alternative-item.component';

/* Interfaces */
import { AlternativeItem } from '../../interfaces/iAlternativeItem';

@Component({
  selector: 'app-game-on-linux',
  standalone: true,
  imports: [AlternativeItemComponent],
  templateUrl: './game-on-linux.component.html',
  styleUrl: './game-on-linux.component.css'
})
export class GameOnLinuxComponent {

  altEpics: AlternativeItem[]= [
    {
      itemName: "Fichier .AppImage",
      imageUrl: "https://i.imgur.com/KlVdhQH.png",
      imageAlt: "AppImage_example",
      itemDesc: "Exemple avec le fichier Wakfu.",
    },
    {
      itemName: "Permissions",
      imageUrl: "https://i.imgur.com/Sk6VljR.png",
      imageAlt: "permissions",
      itemDesc: 'Il faut cocher "Exécuter en tant que programme"/"Executable as Program"',
    },
  ];
  
}
