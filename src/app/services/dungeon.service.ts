import { Injectable } from '@angular/core';

interface DungeonItem {
  name:string,
  level:Number,
  nbr_rooms:Number,
  nbr_players:Number,
  is_UB:Boolean,
  siteUrl:string,
  backgroundImage?:string,
  description?:string
}

@Injectable({
  providedIn: 'root'
})
export class DungeonService {

  constructor() { }


  getAllDungeons(): DungeonItem[]{
    return [
      {
        name:"Chez la Mère Michou",
        level:9,
        nbr_rooms:3,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/koN8yRp.png",
        description:""
      },
      {
        name:"Pâturages des Bouftous",
        level:9,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/2mFxWuD.png",
        description:""
      },
      {
        name:"Le Tofulailler",
        level:12,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/76jSOIo.png",
        description:""
      },
      {
        name:"Larventura",
        level:12,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/6aTUzyR.png",
        description:""
      },
      {
        name:"Le Caveau Relevé",
        level:21,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/DZ5854v.png",
        description:""
      },
      {
        name:"Piou Lahoupe",
        level:21,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/ikdWfps.png",
        description:""
      },
      {
        name:"Donjon abrakne",
        level:21,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/jpyar0T.png",
        description:""
      },
      {
        name:"Le Papaturage Royal",
        level:36,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/odbkjOv.png",
        description:""
      },
      {
        name:"La Montagne Adezieu",
        level:36,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/j5jonAF.png",
        description:""
      },
      {
        name:"Les champs Pourchan",
        level:36,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/MJmfmte.png",
        description:""
      },
      {
        name:"La tour Minérale",
        level:36,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/cJhaat5.png",
        description:""
      },
      {
        name:"Donjon Equipage du poulpe",
        level:36,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/MLiQpxl.png",
        description:""
      },
      {
        name:"Donjon Morts-Brûlés",
        level:36,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/cAVuw4U.png",
        description:""
      },
      {
        name:"L'Antre oubliée",
        level:51,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/duerkkn.png",
        description:""
      },
      {
        name:"Donjon Bwork",
        level:51,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/EMFz00m.png",
        description:""
      },
      {
        name:"La Skouale Sèche",
        level:51,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/be2esbN.png",
        description:""
      },
      {
        name:"Donjon Mollusky",
        level:51,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/h8Ayz7X.png",
        description:""
      },
      {
        name:"Tour des Miss Moches",
        level:51,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/3EIG6GB.png",
        description:""
      },
      {
        name:"Kokokolantha",
        level:51,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/0QezaRr.png",
        description:""
      },
      {
        name:"Château des Cwabes",
        level:51,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/XEijGMJ.png",
        description:""
      },
      {
        name:"Donjon Marteaux-Aigris",
        level:51,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/Ur73WbV.png",
        description:""
      },
      {
        name:"Les Ratacombes",
        level:66,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/p6dSaAg.png",
        description:""
      },
      {
        name:"Antre d'Excarnus",
        level:66,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/YvNbsNj.png",
        description:""
      },
      {
        name:"Temple du Grand Orrok",
        level:66,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/8mOJf19.png",
        description:""
      },
      {
        name:"La Corbeau-Cave",
        level:66,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/Lv5R7aI.png",
        description:""
      },
      {
        name:"La Truchière Abandonnée",
        level:66,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/sZ3Cm7r.png",
        description:""
      },
      {
        name:"Domaine du Petit Groin",
        level:66,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/ED0PNhi.png",
        description:""
      },
      {
        name:"Palais du Tsu",
        level:66,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/DWMGZ99.png",
        description:""
      },
      {
        name:"Donjon Mulou",
        level:66,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/IBBFMFc.png",
        description:""
      },
      {
        name:"Donjon Arakne",
        level:66,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/y6zaoeL.png",
        description:""
      },
      {
        name:"Sliptorium",
        level:81,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/neHiCRS.png",
        description:""
      },
      {
        name:"Le Misolée",
        level:81,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/FG6g6LT.png",
        description:""
      },
      {
        name:"Château de Wagnar",
        level:81,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/7prMHZC.png",
        description:""
      },
      {
        name:"Académie Trool",
        level:81,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/BdOyOuK.png",
        description:""
      },
      {
        name:"Le Hammamamoule",
        level:81,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/VZ0dSxZ.png",
        description:""
      },
      {
        name:"Caverne des Slekymoses",
        level:81,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/36RLfmZ.png",
        description:""
      },
      {
        name:"Scarrière Abandonnée",
        level:81,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/1ohNKv1.png",
        description:""
      },
      {
        name:"Nécropoil de Morbax",
        level:81,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/twQT28s.png",
        description:""
      },
      {
        name:"Antre du Meulou",
        level:81,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/65T6uqb.png",
        description:""
      },
      {
        name:"Repaire des Super-Vilains",
        level:96,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/Sk70RY3.png",
        description:""
      },
      {
        name:"L'Arène Dansante",
        level:96,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/Bfm1NbD.png",
        description:""
      },
      {
        name:"Le Glaglacier Cornu",
        level:96,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/de9qE7f.png",
        description:""
      },
      {
        name:"Niche du Yech'Ti'Wawa",
        level:96,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/avjcN2V.png",
        description:""
      },
      {
        name:"Donjon Gelée",
        level:96,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/V05fZgz.png",
        description:""
      },
      {
        name:"Antre du Corbeau Noir",
        level:96,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/V6rg11P.png",
        description:""
      },
      {
        name:"Repaire des Magik Riktus",
        level:96,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/IC30xP1.png",
        description:""
      },
      {
        name:"Antre du Boufrog",
        level:96,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/BoND6GF.png",
        description:""
      },
      {
        name:"La Chuchobase",
        level:96,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/to8jZss.png",
        description:""
      },
      {
        name:"Antre du Dragon-Cochon",
        level:111,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/3dJIA9B.png",
        description:""
      },
      {
        name:"Le Pot d'Hagen-Glass",
        level:111,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/Ahflxct.png",
        description:""
      },
      {
        name:"Aile de l'Ambassadrice",
        level:111,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/jmJPzqB.png",
        description:""
      },
      {
        name:"La Tour Gelée",
        level:111,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/t1ZgMSK.png",
        description:""
      },
      {
        name:"Donjon Cacterre",
        level:111,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/n9aCjWS.png",
        description:""
      },
      {
        name:"Fosse du Tourmenteur",
        level:111,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/LoGpgLN.png",
        description:""
      },
      {
        name:"Caverne Smarrante",
        level:111,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/Q6NrMGn.png",
        description:""
      },
      {
        name:"Donjon Flaqueux",
        level:111,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/wfcTua1.png",
        description:""
      },
      {
        name:"La Pichine",
        level:111,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/svPl9hq.png",
        description:""
      },
      {
        name:"Sanctuaire de Mihmol",
        level:126,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/SxvLGh6.png",
        description:""
      },
      {
        name:"Donjon Noirespore",
        level:126,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/N2dVUe7.png",
        description:""
      },
      {
        name:"Domaine de la Trouffe Salée",
        level:126,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/7Nr2kZA.png",
        description:""
      },
      {
        name:"Donjon Abraknyde",
        level:126,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/V8oNGRN.png",
        description:""
      },
      {
        name:"Compost du grand Potofeu",
        level:126,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/Md9YihI.png",
        description:""
      },
      {
        name:"Palais Lenald",
        level:126,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/2BR97E5.png",
        description:""
      },
      {
        name:"Jawdin de la Weine",
        level:126,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/BH5pwgW.png",
        description:""
      },
      {
        name:"Le Vignoble Ignoble",
        level:141,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/C3QCJVM.png",
        description:""
      },
      {
        name:"Donjon Srambad",
        level:141,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/mv1v6Ih.png",
        description:""
      },
      {
        name:"Donjon Enutrosor",
        level:141,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/VrtnYAW.png",
        description:""
      },
      {
        name:"Blopéra",
        level:141,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/NTJabx1.png",
        description:""
      },
      {
        name:"Source du Mal",
        level:141,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/TJFpfTJ.png",
        description:""
      },
      {
        name:"Tombeau de Tal Kasha",
        level:141,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/FUT81Lg.png",
        description:""
      },
      {
        name:"Ruche-mêre Sabléoptère",
        level:141,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/7YGEqPB.png",
        description:""
      },
      {
        name:"Château du Wa Wabbit",
        level:141,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/H29XMVW.png",
        description:""
      },
      {
        name:"Laboratoire de Womewo",
        level:141,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/wS1ecE8.png",
        description:""
      },
      {
        name:"Fabrique Meka",
        level:156,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/etReQjQ.png",
        description:""
      },
      {
        name:"Donjon E-Bou",
        level:156,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/fM7pGFT.png",
        description:""
      },
      {
        name:"Plateau des Haut-Vents",
        level:156,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/ff41zyv.png",
        description:""
      },
      {
        name:"Repaire de Kali",
        level:156,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/Eq29gIi.png",
        description:""
      },
      {
        name:"Donjon Riktus Elite",
        level:156,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/fEqO8uE.png",
        description:""
      },
      {
        name:"Roub'Bar",
        level:156,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/pHhU93z.png",
        description:""
      },
      {
        name:"Le Lampionaute",
        level:156,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/AkhrTLN.png",
        description:""
      },
      {
        name:"La Patapoutrerie",
        level:156,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/NnIh8cy.png",
        description:""
      },
      {
        name:"Cime du Grand Totem",
        level:171,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/ftLqkwQ.png",
        description:""
      },
      {
        name:"Donjon des Crocodailles",
        level:171,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/F4qZdkp.png",
        description:""
      },
      {
        name:"Donjon des Kannivores",
        level:171,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/wT38JjD.png",
        description:""
      },
      {
        name:"Donjon des Kannibouls",
        level:171,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/a9LwqKm.png",
        description:""
      },
      {
        name:"Donjon des Tropikes",
        level:171,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/B8aQaok.png",
        description:""
      },
      {
        name:"Cité Interdite",
        level:171,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/ktSpws6.png",
        description:""
      },
      {
        name:"Donjon Gerbouille",
        level:171,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/OVZCyic.png",
        description:""
      },
      {
        name:"Antre de Nogord l'Ezarélé",
        level:186,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/evfoFUL.png",
        description:""
      },
      {
        name:"Tanière des Blérox",
        level:186,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/KWEp4IC.png",
        description:""
      },
      {
        name:"Volcan Or'Hodruin",
        level:186,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/mggkZeO.png",
        description:""
      },
      {
        name:"Pointe du Mont Zinit",
        level:186,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/t5Jdo2F.png",
        description:""
      },
      {
        name:"Sanctuaire des Dragoeufs",
        level:186,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/36XIh3V.png",
        description:""
      },
      {
        name:"La crête Givrée",
        level:186,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/kOI1sc0.png",
        description:""
      },
      {
        name:"La Tour Minérale",
        level:186,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/CH4WgF8.png",
        description:""
      },
      {
        name:"Tombeau de Pandala",
        level:186,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/JSneIa1.png",
        description:""
      },
      {
        name:"Canyon des Fléopards",
        level:186,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/6f7Obh9.png",
        description:""
      },
      {
        name:"Usine Hibourg",
        level:186,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/PID3IYK.png",
        description:""
      },
      {
        name:"Dimension-Objet d'Ombrage",
        level:200,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/WaxlYgT.png",
        description:""
      },
      {
        name:"La Tour minérale",
        level:201,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/B8i9BVv.png",
        description:""
      },
      {
        name:"Donjon Toundrasoirs",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/Ovq089L.png",
        description:""
      },
      {
        name:"Donjon Crustargneux",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/ON6ktEW.png",
        description:""
      },
      {
        name:"Donjon Cagnardeurs",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/zueltwc.png",
        description:""
      },
      {
        name:"Donjon Vandaliénés",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/F7vKFRz.png",
        description:""
      },
      {
        name:"Donjon Plantigardes",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/7JOf0qx.png",
        description:""
      },
      {
        name:"Donjon Mansots",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/hu90tyd.png",
        description:""
      },
      {
        name:"Donjon Carapattes",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/KiTI2q5.png",
        description:""
      },
      {
        name:"Donjon Phytomorphes",
        level:216,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/KRTK5Sb.png",
        description:""
      },
      {
        name:"Donjon Vidéants",
        level:216,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/o3QnJlX.png",
        description:""
      },
      {
        name:"Donjon Démhorribles",
        level:216,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/nn1PTcZ.png",
        description:""
      },
      {
        name:"Donjon Egares ?",
        level:216,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/t8AEIW4.png",
        description:""
      },
      {
        name:"Donjon Ravageurs",
        level:216,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/RvyqDrO.png",
        description:""
      },
      {
        name:"Palais de Rushu",
        level:216,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/vNtfoN5.png",
        description:""
      },
      {
        name:"Nécromonde",
        level:216,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/1VgVM68.png",
        description:""
      },
      {
        name:"Donjon Steamers",
        level:216,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/GXa06fY.png",
        description:""
      },
      {
        name:"Donjon Poisseux abyssaux",
        level:216,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"https://i.imgur.com/X3HPPll.png",
        description:""
      },
  ];
  }
}