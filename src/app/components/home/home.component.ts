import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, PreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  thinkingElio = "https://i.imgur.com/WoWn4Bn.png";
  
  bouftouRoyalUrl = "https://i.imgur.com/CUl0FDk.png";
  royalMoogrUrl ="https://i.imgur.com/DNyK0ep.png";
  dardevilImageUrl = "https://i.imgur.com/RvZ3Ndb.png";
  magmogImageUrl ="https://i.imgur.com/JR9e88l.png";
  kamasSymbolImageUrl ="https://i.imgur.com/JwAbjzf.png";
  xelorGodImageUrl = "https://i.imgur.com/ySgpW35.png";
  elioGodImageUrl = "https://i.imgur.com/cOiZ93e.png";
  hupperGodImageUrl = "https://i.imgur.com/bkOWLDW.png";
  stylishEnuGlassesImageUrl = "https://i.imgur.com/Lmff0D8.png";
  featherImageUrl = "https://i.imgur.com/N9ESgdN.png";


  previews: {title?:string,description?:string, link?:string, backgroundImage?:string}[] = [
    { title: "Bien débuter", description: "Tout ce que j'aurais aimé savoir quand j'ai commencé en vrac !", link: "/eldersWisdom",backgroundImage: this.elioGodImageUrl },
    { title: "Astuces kamas", description: "Des astuces kamas en vrac !", link: "/kamas", backgroundImage: this.kamasSymbolImageUrl },
    { title: "Glossaire", description: "Mot ou abréviation inconnue au bataillon ? Plus maintenant !", link: "/glossary", backgroundImage : this.featherImageUrl},

    { title: "Stuffs 20", description: "Besoin de stuffs pour débuter, reprendre ou tryhard ? Commence  ici !", link: "/stuff20", backgroundImage: this.bouftouRoyalUrl },
    { title: "Stuffs 50", description: "Le donjon Moogr et la tour minérale n'attendent que toi !", link: "/stuff50", backgroundImage: this.royalMoogrUrl },
    { title: "Stuffs 110", description: "Pour aborder sereinement les BU et les super-vilains !", link: "/stuff110", backgroundImage: this.magmogImageUrl },
    
    { title: "Les thèmes d'interface", description: "Améliorez votre interface !", link: "/themes", backgroundImage: this.stylishEnuGlassesImageUrl},
    { title: "La Modulation", description: "La modulation : quoi, pourquoi et comment.", link: "/modulation", backgroundImage: this.xelorGodImageUrl },
    { title: "L'enchantement", description: "Les bases de l'enchantement !", link: "/enchant", backgroundImage: this.hupperGodImageUrl},
    
  ];
  //     { title: "Presentation de gameplays", description: "Découvrez d'autres façons de jouer!", link: "/classes"},


}
