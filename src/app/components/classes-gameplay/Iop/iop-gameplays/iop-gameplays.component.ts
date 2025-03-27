import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../../../services/classes.service';

@Component({
  selector: 'app-iop-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './iop-gameplays.component.html',
  styleUrl: './iop-gameplays.component.css'
})
export class IopGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  iopMChibiIconUrl:string | undefined;
  iopFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.iopMChibiIconUrl = this.classesChibiIconsDic["Iop"]?.maleImgUrl;
    this.iopFChibiIconUrl = this.classesChibiIconsDic["Iop"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Les bases du iop", link: "./base", backgroundImage : this.iopMChibiIconUrl},
      { title: "Iop mêlée", link: "./melee", backgroundImage : this.iopMChibiIconUrl}
    ]
  }

}
