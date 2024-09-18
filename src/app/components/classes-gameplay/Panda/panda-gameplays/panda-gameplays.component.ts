import { Component } from '@angular/core';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../classes.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';

@Component({
  selector: 'app-panda-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './panda-gameplays.component.html',
  styleUrl: './panda-gameplays.component.css'
})
export class PandaGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  pandaMChibiIconUrl:string | undefined;
  pandaFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();
    this.pandaMChibiIconUrl = this.classesChibiIconsDic["Pandawa"]?.maleImgUrl;
    this.pandaFChibiIconUrl = this.classesChibiIconsDic["Pandawa"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Panda support tank", link: "./tank", backgroundImage : this.pandaMChibiIconUrl},
    ]
  }
}
