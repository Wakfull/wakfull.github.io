import { Component } from '@angular/core';

interface StasisDifficultyBonus {
  [key: number]: number;
};

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  tauxDropBase = 0; // taux de drop de base, en pourcentage. Ex: 1% => taux = 0.01
  bonusProspection = 0; // bonus pp de base + challenge. Max 200.
  nbrCharacters = 1; // nbr de caracters, between 1 and 6
  isServerOgrest = false; // les bonus de serveurs du booster sont + importants sur Ogrest
  bonusDropBooster = 0;
  bonusStasis = 0;
  bonusDropCustom = 0; // Un champs custom additionnel si on veut

  stasisBonusNoModuDic : StasisDifficultyBonus = {};
  stasisBonusModuDic: StasisDifficultyBonus = {};

  constructor(){
    this.initStasisMaps();
  }


  dropChanceBuilder(baseChance:number){
    if(this.tauxDropBase<0 || this.tauxDropBase >100) throw "Le taux de base doit etre entre 0 et 100 compris";
    this.tauxDropBase = baseChance;

    const setProspection = (prospectionBonus:number) =>{
      if(prospectionBonus<0 || prospectionBonus > 200) throw "Le bonus de PP doit etre entre 0 et 200 compris";
      this.bonusProspection = prospectionBonus;
      return this;
    }

    const setNbrchars = (nbrChars:number) =>{
      if(nbrChars<1 || nbrChars > 6) throw "Le nombre de personnages doit être entre 1 et 6 compris";
      this.nbrCharacters = nbrChars;
      return this;
    }

    const setIsServOgrest = (isOgrest : boolean) =>{
      this.isServerOgrest = isOgrest;
      this.bonusDropBooster = this.isServerOgrest ? 0.5 : 0.25; // le booster donne +25% drop sur multi, +50% sur mono
      return this;
    }

    const setBonusStasis = ( isModu:boolean, stasisLevel: number) => {
      if(stasisLevel<1 || stasisLevel > 10) throw "Le niveau de stasis doit être entre 1 et 6 compris";
      this.bonusStasis = isModu ? this.stasisBonusModuDic[stasisLevel] : this.stasisBonusNoModuDic [stasisLevel];
      return this;
    }

    const setCustomBonus = ( customBonus: number) => {
      this.bonusDropCustom = customBonus;
      return this;
    }
  }

  calculateProbaDropAtLeastOne(){
    const tauxDropWithModififers = this.tauxDropBase * ( 1 + (this.bonusDropBooster / 100)) * this.bonusDropBooster
    return 1 - (1 - this.tauxDropBase)**this.nbrCharacters; // Rappel faire resultat * 100 pour avoir en %
  }

  initStasisMaps(){
    this.stasisBonusNoModuDic = {
        1 : 0.6,
        2 : 1,
        3 : 1.2,
        4 : 1.6,
        5 : 1.88,
        6 : 2,
        7 : 2.05,
        8 : 2.1,
        9 : 2.15,
        10: 2.2,
    };

    this.stasisBonusModuDic = {
      1 : 1,
      2 : 1,
      3 : 1.4,
      4 : 2.5,
      5 : 4,
      6 : 5.5,
      7 : 6,
      8 : 6.5,
      9 : 6.8,
      10: 7.1,
    };
  }

}
