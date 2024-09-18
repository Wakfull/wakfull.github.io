import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesPreviewComponent } from './classes-preview/classes-preview.component';
import { ClassesService } from './classes.service';

interface IconDictionary {
  [key: string]: {
    maleImgUrl: string;
    femaleImgUrl: string;
  };
};

interface PreviewItem {
  title?:string,
  description?:string,
  link?:string,
  backgroundImage?:string
}

@Component({
  selector: 'app-classes-gameplay',
  standalone: true,
  imports: [RouterModule, CommonModule, ClassesPreviewComponent],
  templateUrl: './classes-gameplay.component.html',
  styleUrl: './classes-gameplay.component.css'
})
export class ClassesGameplayComponent {

  // classesChibiIconsList: IconListItem[] = [];
  classesChibiIconsDic: IconDictionary = {};


  craChibiIconUrl:string | undefined;
  elioChibiIconUrl:string | undefined;
  ecaflipChibiIconUrl:string | undefined;
  eniChibiIconUrl:string | undefined;
  enuChibiIconUrl:string | undefined;

  fecaChibiIconUrl:string | undefined;
  steamChibiIconUrl:string | undefined;
  hupperChibiIconUrl:string | undefined;
  iopChibiIconUrl:string | undefined;
  osaChibiIconUrl:string | undefined;

  ougiChibiIconUrl:string | undefined;
  pandaChibiIconUrl:string | undefined;
  roubChibiIconUrl:string | undefined;
  sacriChibiIconUrl:string | undefined;
  sadiChibiIconUrl:string | undefined;

  sramChibiIconUrl:string | undefined;
  xelChibiIconUrl:string | undefined;
  zobalChibiIconUrl:string | undefined;
  

  previews: PreviewItem[] = []

    constructor(private classesServ:ClassesService){
      this.classesChibiIconsDic = classesServ.getChibiIconsDic();;
      this.populateIconsUrls();
      this.populatePreviews();
    }

    populateIconsUrls(){
      this.craChibiIconUrl =  this.classesChibiIconsDic["Cra"]?.femaleImgUrl;
      this.elioChibiIconUrl = this.classesChibiIconsDic["Eliotrope"]?.maleImgUrl;
      this.ecaflipChibiIconUrl = this.classesChibiIconsDic["Ecaflip"]?.femaleImgUrl;
      this.eniChibiIconUrl = this.classesChibiIconsDic["Eniripsa"]?.femaleImgUrl;
      this.enuChibiIconUrl = this.classesChibiIconsDic["Enutrof"]?.maleImgUrl;

      this.fecaChibiIconUrl = this.classesChibiIconsDic["Feca"]?.maleImgUrl;
      this.steamChibiIconUrl = this.classesChibiIconsDic["Steamer"].maleImgUrl;
      this.hupperChibiIconUrl = this.classesChibiIconsDic["Huppermage"]?.femaleImgUrl;
      this.iopChibiIconUrl = this.classesChibiIconsDic["Iop"]?.maleImgUrl;
      this.osaChibiIconUrl = this.classesChibiIconsDic["Osamodas"]?.maleImgUrl;

      this.ougiChibiIconUrl = this.classesChibiIconsDic["Ouginak"]?.maleImgUrl;
      this.pandaChibiIconUrl = this.classesChibiIconsDic["Pandawa"]?.maleImgUrl;
      this.roubChibiIconUrl = this.classesChibiIconsDic["Roublard"]?.maleImgUrl;
      this.sacriChibiIconUrl = this.classesChibiIconsDic["Sacrieur"]?.maleImgUrl;
      this.sadiChibiIconUrl = this.classesChibiIconsDic["Sadida"]?.maleImgUrl;

      this.sramChibiIconUrl = this.classesChibiIconsDic["Sram"]?.maleImgUrl;
      this.xelChibiIconUrl = this.classesChibiIconsDic["Xelor"]?.maleImgUrl;
      this.zobalChibiIconUrl = this.classesChibiIconsDic["Zobal"]?.maleImgUrl;
    }

    populatePreviews(){
      this.previews = [
        { title: "Eliotrope", link: "./elio", backgroundImage : this.elioChibiIconUrl}, // ok
        { title: "Osamodas", link: "./osa", backgroundImage : this.osaChibiIconUrl}, // ok
        { title: "Cra", link: "./cra", backgroundImage : this.craChibiIconUrl},
        { title: "Ecaflip", link: "./eca", backgroundImage : this.ecaflipChibiIconUrl},
        { title: "Enu", link: "./enu", backgroundImage : this.enuChibiIconUrl},
        
        { title: "Feca", link: "./feca", backgroundImage : this.fecaChibiIconUrl},
        { title: "Steamer", link: "./steam", backgroundImage : this.steamChibiIconUrl},
        { title: "Huppermage", link: "./hupper", backgroundImage : this.hupperChibiIconUrl},
        { title: "Iop", link: "./iop", backgroundImage : this.iopChibiIconUrl},
        { title: "Eniripsa", link: "./eni", backgroundImage : this.eniChibiIconUrl},
        
        { title: "Ouginak", link: "./ougi", backgroundImage : this.ougiChibiIconUrl},
        { title: "Pandawa", link: "./panda", backgroundImage : this.pandaChibiIconUrl},
        { title: "Roublard", link: "./roub", backgroundImage : this.roubChibiIconUrl},
        { title: "Sacrieur", link: "./sacri", backgroundImage : this.sacriChibiIconUrl},
        { title: "Sadida", link: "./sadi", backgroundImage : this.sadiChibiIconUrl},
        
        { title: "Sram", link: "./sram", backgroundImage : this.sramChibiIconUrl},
        { title: "Xelor", link: "./xel", backgroundImage : this.xelChibiIconUrl},
        { title: "Zobal", link: "./zobal", backgroundImage : this.zobalChibiIconUrl},

      ]
    }
  }
  
