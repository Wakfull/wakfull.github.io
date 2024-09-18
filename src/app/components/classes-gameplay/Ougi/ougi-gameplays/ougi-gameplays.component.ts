import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../classes.service';

@Component({
  selector: 'app-ougi-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './ougi-gameplays.component.html',
  styleUrl: './ougi-gameplays.component.css'
})
export class OugiGameplaysComponent {
  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  ougiMChibiIconUrl:string | undefined;
  ougiFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.ougiMChibiIconUrl = this.classesChibiIconsDic["Ouginak"]?.maleImgUrl;
    this.ougiFChibiIconUrl = this.classesChibiIconsDic["Ouginak"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Ougi mêlée", link: "./melee", backgroundImage : this.ougiMChibiIconUrl},
      { title: "Ougi poison", link: "./poison", backgroundImage : this.ougiMChibiIconUrl}
    ]
  }
}
