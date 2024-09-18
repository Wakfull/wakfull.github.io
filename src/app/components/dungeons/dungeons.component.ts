import { Component } from '@angular/core';
import { DungeonPreviewComponent } from './dungeon-preview/dungeon-preview.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DungeonService } from '../../services/dungeon.service';

interface PreviewDungeonItem {
  name?:string,
  level?:Number,
  nbr_rooms?:Number,
  nbr_players?:Number,
  is_UB?:Boolean,
  siteUrl:string,
  backgroundImage?:string,
  description?:string
}

@Component({
  selector: 'app-dungeons',
  standalone: true,
  imports: [RouterModule, CommonModule, DungeonPreviewComponent],
  templateUrl: './dungeons.component.html',
  styleUrl: './dungeons.component.css'
})
export class DungeonsComponent {

  previews: PreviewDungeonItem[] = []

  constructor( private dgServ:DungeonService){
    this.previews = dgServ.getAllDungeons();
  }

}
