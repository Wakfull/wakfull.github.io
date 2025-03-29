import { Component, OnInit } from '@angular/core';
import { DungeonService } from '../../../services/dungeon.service';
import { DungeonItem } from '../../../interfaces/iDungeonItem';
import { AlternativeItem } from '../../../interfaces/iAlternativeItem';
import { AlternativeItemComponent } from '../../../reusables/alternative-item/alternative-item.component';

@Component({
  selector: 'app-stuffs80',
  standalone: true,
  imports: [AlternativeItemComponent],
  templateUrl: './stuffs80.component.html',
  styleUrl: './stuffs80.component.css'
})
export class Stuffs80Component implements OnInit{

  dungeons_80:DungeonItem[] = [];
  dgService: DungeonService;

  altEpics: AlternativeItem[]= [
      {
        itemName: "Heaume de Soudeur",
        imageUrl: "https://i.imgur.com/8GDPkJT.png" ,
        imageAlt: "Heaum de Soudeur",
        itemDesc: "Coiffe PA",
      },
    ];
  
    altRelics : AlternativeItem[] = [
      {
        itemName: "Galons Fred",
        imageUrl: "https://i.imgur.com/O1ShvRQ.png",
        imageAlt: "Galons Fred",
        itemDesc: "Bonne relique distance et crit",
      },
      {
        itemName: "Ceinture Rasboulaire du Rasboul",
        imageUrl: "https://i.imgur.com/k8gQqdL.png",
        imageAlt: "Ceinture Rasboulaire du Rasboul",
        itemDesc: "Bonnes stats offensives génériques.",
      },
      {
        itemName: "Bottes anti-UC",
        imageUrl: "https://i.imgur.com/Jcdxv5U.png",
        imageAlt: "Bottes anti-UC",
        itemDesc: "Bonnes stats ET donnent 1PA au lieu de 1PM.",
      },
    ]

  constructor( dgService : DungeonService){
    this.dgService = dgService;
  }

  ngOnInit(): void {
    this.dungeons_80 = this.dgService.getDungeonsAtGivenLevel(80);
  }

}
