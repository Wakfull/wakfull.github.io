import { Component } from '@angular/core';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../../../services/classes.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';

@Component({
  selector: 'app-hupper-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './hupper-gameplays.component.html',
  styleUrl: './hupper-gameplays.component.css'
})
export class HupperGameplaysComponent {
  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  hupperMChibiIconUrl:string | undefined;
  hupperFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.hupperMChibiIconUrl = this.classesChibiIconsDic["Huppermage"]?.maleImgUrl;
    this.hupperFChibiIconUrl = this.classesChibiIconsDic["Huppermage"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Les bases de l'hupper", link: "./base", backgroundImage : this.hupperMChibiIconUrl},
      { title: "Hupper terre mêlée", link: "./melee", backgroundImage : this.hupperMChibiIconUrl},
      { title: "Hupper full elem", link: "./elem", backgroundImage : this.hupperFChibiIconUrl}
    ]
  }
}
