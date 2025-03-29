import { Component, OnInit } from '@angular/core';
import { DungeonService } from '../../../services/dungeon.service';
import { DungeonItem } from '../../../interfaces/iDungeonItem';

@Component({
  selector: 'app-stuffs80',
  standalone: true,
  imports: [],
  templateUrl: './stuffs80.component.html',
  styleUrl: './stuffs80.component.css'
})
export class Stuffs80Component implements OnInit{

  dungeons_80:DungeonItem[] = [];
  dgService: DungeonService;

  constructor( dgService : DungeonService){
    this.dgService = dgService;
  }

  ngOnInit(): void {
    this.dungeons_80 = this.dgService.getDungeonsAtGivenLevel(80);
  }

}
