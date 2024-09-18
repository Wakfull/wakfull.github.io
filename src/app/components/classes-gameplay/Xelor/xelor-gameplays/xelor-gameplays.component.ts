import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../classes.service';

@Component({
  selector: 'app-xelor-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './xelor-gameplays.component.html',
  styleUrl: './xelor-gameplays.component.css'
})
export class XelorGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  xelMChibiIconUrl:string | undefined;
  xelFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.xelMChibiIconUrl = this.classesChibiIconsDic["Xelor"]?.maleImgUrl;
    this.xelFChibiIconUrl = this.classesChibiIconsDic["Xelor"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Xelor dist feu", link: "./dist", backgroundImage : this.xelMChibiIconUrl},
      { title: "Xelor dist zone", link: "./zone", backgroundImage : this.xelFChibiIconUrl},
      { title: "Xelor support", link: "./support", backgroundImage : this.xelMChibiIconUrl}
    ]
  }
}
