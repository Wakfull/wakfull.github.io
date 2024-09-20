import { Component } from '@angular/core';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../../../services/classes.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';

@Component({
  selector: 'app-enu-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './enu-gameplays.component.html',
  styleUrl: './enu-gameplays.component.css'
})
export class EnuGameplaysComponent {
  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  enuMChibiIconUrl:string | undefined;
  enuFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.enuMChibiIconUrl = this.classesChibiIconsDic["Enutrof"]?.maleImgUrl;
    this.enuFChibiIconUrl = this.classesChibiIconsDic["Enutrof"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Enu mêlee", link: "./melee", backgroundImage : this.enuMChibiIconUrl},
      { title: "Enu support", link: "./support", backgroundImage : this.enuFChibiIconUrl}
    ]
  }
}
