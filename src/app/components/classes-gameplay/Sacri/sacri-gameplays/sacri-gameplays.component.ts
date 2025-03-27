import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../../../services/classes.service';

@Component({
  selector: 'app-sacri-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './sacri-gameplays.component.html',
  styleUrl: './sacri-gameplays.component.css'
})
export class SacriGameplaysComponent {
  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  sacriMChibiIconUrl:string | undefined;
  sacriFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();
    this.sacriMChibiIconUrl = this.classesChibiIconsDic["Sacrieur"]?.maleImgUrl;
    this.sacriFChibiIconUrl = this.classesChibiIconsDic["Sacrieur"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Les bases du Sacri", link: "./base", backgroundImage : this.sacriMChibiIconUrl},
      { title: "Sacrieur dtp mêlée", link: "./melee", backgroundImage : this.sacriMChibiIconUrl},
      { title: "Sacrieur tank", link: "./tank", backgroundImage : this.sacriMChibiIconUrl},
    ]
  }
}
