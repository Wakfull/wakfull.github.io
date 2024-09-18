import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesPreviewComponent } from '../../classes-preview/classes-preview.component';
import { PreviewItem } from '../../../../interfaces/iPreviewItem';
import { ClassesService } from '../../classes.service';

@Component({
  selector: 'app-sram-gameplays',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './sram-gameplays.component.html',
  styleUrl: './sram-gameplays.component.css'
})
export class SramGameplaysComponent {

  previews: PreviewItem[] = []
  classesChibiIconsDic: any = {};

  sramMChibiIconUrl:string | undefined;
  sramFChibiIconUrl:string | undefined;

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();
    this.sramMChibiIconUrl = this.classesChibiIconsDic["Sram"]?.maleImgUrl;
    this.sramFChibiIconUrl = this.classesChibiIconsDic["Sram"]?.femaleImgUrl;
    this.populatePreviews();
  }

  populatePreviews(){
    this.previews = [
      { title: "Sram dtp mêlée", link: "./melee", backgroundImage : this.sramMChibiIconUrl}
    ]
  }
}
