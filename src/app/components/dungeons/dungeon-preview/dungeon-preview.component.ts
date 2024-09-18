import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dungeon-preview',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dungeon-preview.component.html',
  styleUrl: './dungeon-preview.component.css'
})
export class DungeonPreviewComponent {

  @Input() name?:string;
  @Input() level?:Number;
  @Input() nbr_rooms?:Number;
  @Input() nbr_players?:Number;
  @Input() is_UB?:Boolean;
  @Input() siteUrl?:string;
  @Input() backgroundImage?:string;
  @Input() description?:string;

  defaultName:string = "";
  defaultNbr_players:Number = 6;
  defaultIs_UB:Boolean = false;
  defaultDescription:string = "";
  defaultSiteUrl:string = "/404";
  defaultImage:string = "https://i.imgur.com/7NTPbre.png";
  
  /* TODO
    name?:string,
  level?:Number,
  nbr_rooms?:Number,
  is_UB?:Boolean,
  siteUrl:string,
  backgroundImage?:string,
  description?:string
  */
}
