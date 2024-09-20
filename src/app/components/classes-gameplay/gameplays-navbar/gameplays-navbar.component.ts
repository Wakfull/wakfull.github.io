import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassesService } from '../../../services/classes.service';
import { CommonModule } from '@angular/common';

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
  selector: 'app-gameplays-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './gameplays-navbar.component.html',
  styleUrl: './gameplays-navbar.component.css'
})
export class GameplaysNavbarComponent {

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

  linksImagesList:{link:string, imageUrl?:string}[] = [];

  constructor(private classesServ:ClassesService){
    this.classesChibiIconsDic = classesServ.getChibiIconsDic();
    this.populateIconsUrls();
    this.populateNavbar();
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

  populateNavbar(){
    this.linksImagesList = [
      { 
        link:"./elio", 
        imageUrl: this.elioChibiIconUrl
      },
      { 
        link:"./osa", 
        imageUrl: this.osaChibiIconUrl
      },
      { 
        link:"./cra", 
        imageUrl: this.craChibiIconUrl
      },
      { 
        link:"./eca", 
        imageUrl: this.ecaflipChibiIconUrl
      },
      { 
        link:"./eni", 
        imageUrl: this.eniChibiIconUrl
      },
      { 
        link:"./enu", 
        imageUrl: this.enuChibiIconUrl
      },

      { 
        link:"./feca", 
        imageUrl: this.fecaChibiIconUrl
      },
      { 
        link:"./steamer", 
        imageUrl: this.steamChibiIconUrl
      },
      { 
        link:"./hupper", 
        imageUrl: this.hupperChibiIconUrl
      },
      { 
        link:"./iop", 
        imageUrl: this.iopChibiIconUrl
      },

      { 
        link:"./ougi", 
        imageUrl: this.ougiChibiIconUrl
      },
      { 
        link:"./panda", 
        imageUrl: this.pandaChibiIconUrl
      },
      { 
        link:"./roub", 
        imageUrl: this.roubChibiIconUrl
      },
      { 
        link:"./sacri", 
        imageUrl: this.sacriChibiIconUrl
      },
      { 
        link:"./sadi", 
        imageUrl: this.sadiChibiIconUrl
      },

      { 
        link:"./sram", 
        imageUrl: this.sramChibiIconUrl
      },
      { 
        link:"./xel", 
        imageUrl: this.xelChibiIconUrl
      },
      { 
        link:"./zobal", 
        imageUrl: this.zobalChibiIconUrl
      },
      
    ]
  }

}
