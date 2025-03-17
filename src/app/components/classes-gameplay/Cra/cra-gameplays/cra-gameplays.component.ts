import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';
import { ClassesService } from '../../../../services/classes.service';
import { PreviewItem } from '../../../../interfaces/iPreviewItem.js';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cra-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './cra-gameplays.component.html',
  styleUrl: './cra-gameplays.component.css'
})
export class CraGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  craMChibiIconUrl:string | undefined;
  craFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.craMChibiIconUrl = this.classesChibiIconsDic["Cra"]?.maleImgUrl;
    this.craFChibiIconUrl = this.classesChibiIconsDic["Cra"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Les bases du cra", link: "./base", backgroundImage : this.craMChibiIconUrl},
      { title: "Cra classique", link: "./classic", backgroundImage : this.craMChibiIconUrl}
    ]
  }
}
