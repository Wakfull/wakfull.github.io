import { Component } from '@angular/core';
import { ClassesService } from '../../classes.service';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';

@Component({
  selector: 'app-steam-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './steam-gameplays.component.html',
  styleUrl: './steam-gameplays.component.css'
})
export class SteamGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  steamMChibiIconUrl:string | undefined;
  steamFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.steamMChibiIconUrl = this.classesChibiIconsDic["Steamer"]?.maleImgUrl;
    this.steamFChibiIconUrl = this.classesChibiIconsDic["Steamer"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Steam support", link: "./support", backgroundImage : this.steamMChibiIconUrl},
      { title: "Steam DPT zone", link: "./zone", backgroundImage : this.steamFChibiIconUrl}
    ]
  }
}
