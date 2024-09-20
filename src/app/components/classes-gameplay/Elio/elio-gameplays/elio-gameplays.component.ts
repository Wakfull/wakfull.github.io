import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';
import { ClassesService } from '../../../../services/classes.service';
import { PreviewItem } from '../../../../interfaces/iPreviewItem.js';

@Component({
  selector: 'app-elio-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './elio-gameplays.component.html',
  styleUrl: './elio-gameplays.component.css'
})
export class ElioGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  elioMChibiIconUrl:string | undefined;
  elioFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.elioMChibiIconUrl = this.classesChibiIconsDic["Eliotrope"]?.maleImgUrl;
    this.elioFChibiIconUrl = this.classesChibiIconsDic["Eliotrope"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Elio mêlée", link: "./melee", backgroundImage : this.elioMChibiIconUrl},
      { title: "Elio Distance", link: "./dist", backgroundImage : this.elioFChibiIconUrl},
    ]
  }
}
