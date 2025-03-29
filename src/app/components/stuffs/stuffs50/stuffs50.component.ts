import { Component, OnInit } from '@angular/core';
import { DungeonService } from '../../../services/dungeon.service';
import { DungeonItem } from '../../../interfaces/iDungeonItem';


@Component({
  selector: 'app-stuffs50',
  standalone: true,
  imports: [],
  templateUrl: './stuffs50.component.html',
  styleUrl: './stuffs50.component.css'
})
export class Stuffs50Component implements OnInit {

  dungeons_50:DungeonItem[] = [];
  dgService: DungeonService;

  constructor( dgService: DungeonService){
    this.dgService = dgService;
  }

  ngOnInit(): void {
    this.dungeons_50 = this.dgService.getDungeonsAtGivenLevel(50);
  }
}
