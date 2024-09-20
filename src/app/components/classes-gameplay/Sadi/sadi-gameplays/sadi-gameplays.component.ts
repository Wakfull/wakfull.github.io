import { Component } from '@angular/core';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../../../services/classes.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';

@Component({
  selector: 'app-sadi-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './sadi-gameplays.component.html',
  styleUrl: './sadi-gameplays.component.css'
})
export class SadiGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  sadiMChibiIconUrl:string | undefined;
  sadiFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();
    this.sadiMChibiIconUrl = this.classesChibiIconsDic["Sadida"]?.maleImgUrl;
    this.sadiFChibiIconUrl = this.classesChibiIconsDic["Sadida"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Sadi support", link: "./support", backgroundImage : this.sadiFChibiIconUrl},
      { title: "Sadi dpt dist", link: "./dist", backgroundImage : this.sadiMChibiIconUrl},
      { title: "Sadi dpt poison", link: "./poison", backgroundImage : this.sadiFChibiIconUrl},
    ]
  }
}
