import { Component } from '@angular/core';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../../../services/classes.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';

@Component({
  selector: 'app-zobal-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './zobal-gameplays.component.html',
  styleUrl: './zobal-gameplays.component.css'
})
export class ZobalGameplaysComponent {
  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  zobalMChibiIconUrl:string | undefined;
  zobalFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.zobalMChibiIconUrl = this.classesChibiIconsDic["Zobal"]?.maleImgUrl;
    this.zobalFChibiIconUrl = this.classesChibiIconsDic["Zobal"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Zobal support", link: "./support", backgroundImage : this.zobalMChibiIconUrl},
      { title: "Zobal melee", link: "./melee", backgroundImage : this.zobalFChibiIconUrl},
    ]
  }
}
