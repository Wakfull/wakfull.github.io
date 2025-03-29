import { Component } from '@angular/core';
import { DungeonService } from '../../../services/dungeon.service';
import { DungeonItem } from '../../../interfaces/iDungeonItem';

@Component({
  selector: 'app-stuffs110',
  standalone: true,
  imports: [],
  templateUrl: './stuffs110.component.html',
  styleUrl: './stuffs110.component.css'
})
export class Stuffs110Component {

  dungeons_110:DungeonItem[] = [];
    dgService: DungeonService;
  
    constructor( dgService : DungeonService){
      this.dgService = dgService;
    }
  
    ngOnInit(): void {
      this.dungeons_110 = this.dgService.getDungeonsAtGivenLevel(110);
    }
  
}
