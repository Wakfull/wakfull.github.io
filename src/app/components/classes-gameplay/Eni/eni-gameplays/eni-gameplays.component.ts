import { Component } from '@angular/core';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../../../services/classes.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';

@Component({
  selector: 'app-eni-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './eni-gameplays.component.html',
  styleUrl: './eni-gameplays.component.css'
})
export class EniGameplaysComponent {
  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  eniMChibiIconUrl:string | undefined;
  eniFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.eniMChibiIconUrl = this.classesChibiIconsDic["Eniripsa"]?.maleImgUrl;
    this.eniFChibiIconUrl = this.classesChibiIconsDic["Eniripsa"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Les bases de l'eni", link: "./base", backgroundImage : this.eniMChibiIconUrl},
      { title: "Eni support", link: "./support", backgroundImage : this.eniMChibiIconUrl},
      { title: "Eni poison", link: "./poison", backgroundImage : this.eniMChibiIconUrl}
    ]
  }
}
