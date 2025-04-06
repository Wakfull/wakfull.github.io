import { Component } from '@angular/core';
import { ItemTileClickableComponent } from '../../reusables/item-tile-clickable/item-tile-clickable.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ItemTileClickableComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

    // <a href="https://discord.gg/49EaCMrYsY"></a>
    
    mediaItems :any[] = [
      {
        url: "https://discord.gg/49EaCMrYsY",
        itemName: "Discord",
        imageUrl: "https://i.imgur.com/CB64EnF.png",
        imageAlt: "image_tile_discord",
        itemDesc: "Pour les questions, suggestions ou juste bavarder !",
      },
      {
        url: "https://www.twitch.tv/aekami",
        itemName: "Twitch",
        imageUrl: "https://i.imgur.com/kpKgr2o.png",
        imageAlt: "image_tile_twitch",
        itemDesc: "Passe dire bonjour sur le live !",
      },
      {
        url: "https://www.youtube.com/@Aekami",
        itemName: "Youtube",
        imageUrl: "https://i.imgur.com/jUMsXiM.png",
        imageAlt: "image_tile_youtube",
        itemDesc: "A terme, le contenu du site sera également disponible en format vidéo ici !",
      },
      {
        url: "https://github.com/Wakfull/wakfull.github.io",
        itemName: "GitHub",
        imageUrl: "https://i.imgur.com/P2Fksqh.png",
        imageAlt: "image_tile_github",
        itemDesc: "Les site est open-source !",
      },
    ]
    
}
