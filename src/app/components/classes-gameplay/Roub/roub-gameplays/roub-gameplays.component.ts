import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../../../services/classes.service';

@Component({
  selector: 'app-roub-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './roub-gameplays.component.html',
  styleUrl: './roub-gameplays.component.css'
})
export class RoubGameplaysComponent {
  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  roubMChibiIconUrl:string | undefined;
  roubFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();
    this.roubMChibiIconUrl = this.classesChibiIconsDic["Roublard"]?.maleImgUrl;
    this.roubFChibiIconUrl = this.classesChibiIconsDic["Roublard"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Les bases du Roublard", link: "./base", backgroundImage : this.roubMChibiIconUrl},
      { title: "Roublard ?", link: "./default", backgroundImage : this.roubMChibiIconUrl},
    ]
  }
}
