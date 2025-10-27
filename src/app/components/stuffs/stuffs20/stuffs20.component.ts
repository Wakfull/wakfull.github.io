import { Component, OnInit } from '@angular/core';
import { AlternativeItemComponent } from '../../../reusables/alternative-item/alternative-item.component';

/* Services */
import { DungeonService } from '../../../services/dungeon.service';

/* Interfaces */
import { AlternativeItem } from '../../../interfaces/iAlternativeItem';
import { DungeonItem } from '../../../interfaces/iDungeonItem';

@Component({
  selector: 'app-stuffs20',
  standalone: true,
  imports: [AlternativeItemComponent],
  templateUrl: './stuffs20.component.html',
  styleUrl: './stuffs20.component.css'
})
export class Stuffs20Component implements OnInit{

  dungeons_20:DungeonItem[] = [];
  dgService: DungeonService;

  exampleItems : AlternativeItem[] = [
    {
      itemName: "",
      imageUrl: "",
      imageAlt: "",
      itemDesc: "",
    },
  ];

  optiItems : AlternativeItem[] = [
    {
      itemName: "Lames en table",
      imageUrl: "https://i.imgur.com/63MY5lO.png",
      imageAlt: "Lames en table",
      itemDesc: "Obtention : drop rare sur l'archimonstre larve qui spawn parfois dans les égouts.",
    },
    {
      itemName: "La queue",
      imageUrl: "https://i.imgur.com/PxMCG3b.png",
      imageAlt: "La queue",
      itemDesc: "Obtention : cf ci-dessous.",
    },
  ];

  epicItems : AlternativeItem[] = [
    {
      itemName: "Anneau de satisfaction",
      imageUrl: "https://i.imgur.com/WE3XImw.png",
      imageAlt: "Anneau de satisfaction",
      itemDesc: "Obtention : drop sur le boss du donjon Abrakne (nord-ouest d'Astrub)",
    },
  ];

  constructor( dgService : DungeonService){
    this.dgService = dgService;
  }
  ngOnInit(): void {
    this.dungeons_20 = this.dgService.getDungeonsAtGivenLevel(20);
  }
}
