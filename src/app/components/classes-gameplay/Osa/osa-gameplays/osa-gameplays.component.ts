import { Component } from '@angular/core';
import { ClassesService } from '../../classes.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';
import { PreviewItem } from '../../../../interfaces/iPreviewItem.js';

@Component({
  selector: 'app-osa-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './osa-gameplays.component.html',
  styleUrl: './osa-gameplays.component.css'
})
export class OsaGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  osaMChibiIconUrl:string | undefined;
  osaFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();
    this.osaMChibiIconUrl = this.classesChibiIconsDic["Osamodas"]?.maleImgUrl;
    this.osaFChibiIconUrl = this.classesChibiIconsDic["Osamodas"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Osa support", link: "./support", backgroundImage : this.osaMChibiIconUrl},
      { title: "Osa mêlée", link: "./melee", backgroundImage : this.osaFChibiIconUrl},
    ]
  }

}
