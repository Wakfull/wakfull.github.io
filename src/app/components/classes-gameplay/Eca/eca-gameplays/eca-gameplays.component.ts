import { Component } from '@angular/core';
import { ClassesService } from '../../classes.service';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';

@Component({
  selector: 'app-eca-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './eca-gameplays.component.html',
  styleUrl: './eca-gameplays.component.css'
})
export class EcaGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  ecaMChibiIconUrl:string | undefined;
  ecaFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.ecaMChibiIconUrl = this.classesChibiIconsDic["Ecaflip"]?.maleImgUrl;
    this.ecaFChibiIconUrl = this.classesChibiIconsDic["Ecaflip"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Eca dist", link: "./dist", backgroundImage : this.ecaMChibiIconUrl}
    ]
  }

}
