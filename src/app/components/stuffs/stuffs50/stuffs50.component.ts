import { Component, OnInit } from '@angular/core';
import { AlternativeItemComponent } from '../../../reusables/alternative-item/alternative-item.component';

/* Services */
import { DungeonService } from '../../../services/dungeon.service';

/* Interfaces */
import { DungeonItem } from '../../../interfaces/iDungeonItem';
import { AlternativeItem } from '../../../interfaces/iAlternativeItem';

@Component({
  selector: 'app-stuffs50',
  standalone: true,
  imports: [AlternativeItemComponent],
  templateUrl: './stuffs50.component.html',
  styleUrl: './stuffs50.component.css'
})
export class Stuffs50Component implements OnInit {

  dungeons_50:DungeonItem[] = [];
  dgService: DungeonService;

  exampleItems : AlternativeItem[] = [
    {
      itemName: "",
      imageUrl: "",
      imageAlt: "",
      itemDesc: "",
    },
  ]

  altItemsHelms: AlternativeItem[]= [
    {
      itemName: "Coiffe Moogr Impériale",
      imageUrl: "https://i.imgur.com/h47OKJp.png",
      imageAlt: "coiffe moogr imperiale",
      itemDesc: "Maitrise + PO",
    },
    {
      itemName: "Casque de Mort-brulé",
      imageUrl: "https://i.imgur.com/JfpMetH.png",
      imageAlt: "coiffe mort-brulés",
      itemDesc: "Distance sans PO",
    },
    {
      itemName: "Casque craquelé",
      imageUrl: "https://i.imgur.com/zItTOCR.png",
      imageAlt: "Casque craquelé",
      itemDesc: "Mêlée",
    }
  ];

  altEpics: AlternativeItem[]= [
    {
      itemName: "La coquille",
      imageUrl: "https://i.imgur.com/rev57GT.png",
      imageAlt: "la coquille",
      itemDesc: "Si vous n'avez pas besoin de PO dans votre build",
    },
    {
      itemName: "La Kyou aux ailes",
      imageUrl: "https://i.imgur.com/mti2DY0.png",
      imageAlt: "La Kyou aux ailes",
      itemDesc: "Si vous ne voulez pas du malus PO.",
    },
  ];

  altRelics : AlternativeItem[] = [
    {
      itemName: "Bottes de Koko",
      imageUrl: "https://i.imgur.com/j9B2UUb.png",
      imageAlt: "Bottes de Koko",
      itemDesc: "",
    },
    {
      itemName: "Perruque de Goultard",
      imageUrl: "https://i.imgur.com/GYLkJ0O.png",
      imageAlt: "Perruque de Goultard",
      itemDesc: "Pour les classes qui veulent beaucoup de PO. Attention, cet item ne donne pas de PA.",
    },
  ]

  constructor( dgService: DungeonService){
    this.dgService = dgService;
  }

  ngOnInit(): void {
    this.dungeons_50 = this.dgService.getDungeonsAtGivenLevel(50);
  }
}
