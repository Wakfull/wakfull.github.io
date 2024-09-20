import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../../../services/classes.service';

@Component({
  selector: 'app-feca-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './feca-gameplays.component.html',
  styleUrl: './feca-gameplays.component.css'
})
export class FecaGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  fecaMChibiIconUrl:string | undefined;
  fecaFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
    this.fecaMChibiIconUrl = this.classesChibiIconsDic["Feca"]?.maleImgUrl;
    this.fecaFChibiIconUrl = this.classesChibiIconsDic["Feca"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Feca support", link: "./support", backgroundImage : this.fecaMChibiIconUrl},
      { title: "Feca glyphe", link: "./glyph", backgroundImage : this.fecaFChibiIconUrl}
    ]
  }
}
