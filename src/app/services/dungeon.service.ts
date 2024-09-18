import { Injectable } from '@angular/core';

interface DungeonItem {
  name?:string,
  level?:Number,
  nbr_rooms?:Number,
  nbr_players?:Number,
  is_UB?:Boolean,
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
        backgroundImage:"",
        description:""
      },
      {
        name:"Pâturages des Bouftous",
        level:9,
        nbr_rooms:3,
        nbr_players:12,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Le Tofulailler",
        level:12,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Larventura",
        level:12,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Le Caveau Relevé",
        level:21,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Piou Lahoupe",
        level:21,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Le Papaturage Royal",
        level:36,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La Montagne Adezieu",
        level:36,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Les champs Pourchan",
        level:36,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La tour Minérale",
        level:36,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Equipage du poulpe",
        level:36,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Morts-Brûlés",
        level:36,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"L'Antre oubliée",
        level:51,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Bwork",
        level:51,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La Skouale Sèche",
        level:51,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Mollusky",
        level:51,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Tour des Miss Moches",
        level:51,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Kokokolantha",
        level:51,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Château des Cwabes",
        level:51,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Marteaux-Aigris",
        level:51,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Les Ratacombes",
        level:66,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Antre d'Excarnus",
        level:66,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Temple du Grand Orrok",
        level:66,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La Corbeau-Cave",
        level:66,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La Truchière Abandonnée",
        level:66,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Domaine du Petit Groin",
        level:66,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Palais du Tsu",
        level:66,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Mulou",
        level:66,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Arakne",
        level:66,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Sliptorium",
        level:81,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Le Misolée",
        level:81,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Château de Wagnar",
        level:81,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Académie Trool",
        level:81,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Le Hammamamoule",
        level:81,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Caverne des Slekymoses",
        level:81,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Scarrière Abandonnée",
        level:81,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Nécropoil de Morbax",
        level:81,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Antre du Meulou",
        level:81,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Repaire des Super-Vilains",
        level:96,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"L'Arène Dansante",
        level:96,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Le Glaglacier Cornu",
        level:96,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Niche du Yech'Ti'Wawa",
        level:96,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Gelée",
        level:96,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Antre du Corbeau Noir",
        level:96,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Repaire des Magik Riktus",
        level:96,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Antre du Boufrog",
        level:96,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La Chuchobase",
        level:96,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Antre du Dragon-Cochon",
        level:111,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Le Pot d'Hagen-Glass",
        level:111,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Aile de l'Ambassadrice",
        level:111,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La Tour Gelée",
        level:111,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Cacterre",
        level:111,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Fosse du Tourmenteur",
        level:111,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Caverne Smarrante",
        level:111,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Flaqueux",
        level:111,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La Pichine",
        level:111,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Sanctuaire de Mihmol",
        level:126,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Noirespore",
        level:126,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Domaine de la Trouffe Salée",
        level:126,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Abraknyde",
        level:126,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Compost du grand Potofeu",
        level:126,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Palais Lenald",
        level:126,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Jawdin de la Weine",
        level:126,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Le Vignoble Ignoble",
        level:141,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Srambad",
        level:141,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Enutrosor",
        level:141,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Blopéra",
        level:141,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Source du Mal",
        level:141,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Tombeau de Tal Kasha",
        level:141,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Ruche-mêre Sabléoptère",
        level:141,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Château du Wa Wabbit",
        level:141,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Laboratoire de Womewo",
        level:141,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Fabrique Meka",
        level:156,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon E-Bou",
        level:156,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Plateau des Haut-Vents",
        level:156,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Repaire de Kali",
        level:156,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Riktus Elite",
        level:156,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Roub'Bar",
        level:156,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Le Lampionaute",
        level:156,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La Patapoutrerie",
        level:156,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Cime du Grand Totem",
        level:171,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon des Crocodailles",
        level:171,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon des Kannivores",
        level:171,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon des Kannibouls",
        level:171,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon des Tropikes",
        level:171,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Cité Interdite",
        level:171,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Gerbouille",
        level:171,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Antre de Nogord l'Ezarélé",
        level:186,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Tanière des Blérox",
        level:186,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Volcan Or'Hodruin",
        level:186,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Pointe du Mont Zinit",
        level:186,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Sanctuaire es Dragoeufs",
        level:186,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La crête Givrée",
        level:186,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La Tour Minérale",
        level:186,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Tombeau de Pandala",
        level:186,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Canyon des Fléopards",
        level:186,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Usine Hibourg",
        level:186,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Dimension-Objet d'Ombrage",
        level:200,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"La Tour minérale",
        level:201,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Toundrasoirs",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Crustargneux",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Cagnardeurs",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Vandaliénés",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Plantigardes",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Mansots",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Carapattes",
        level:201,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Phytomorphes",
        level:216,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Vidéants",
        level:216,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Démùhorribles",
        level:216,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Egares ?",
        level:216,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Ravageurs",
        level:216,
        nbr_rooms:2,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Palais de Rushu",
        level:216,
        nbr_rooms:1,
        nbr_players:6,
        is_UB:true,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Nécromonde",
        level:216,
        nbr_rooms:1,
        nbr_players:3,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Steamers",
        level:216,
        nbr_rooms:4,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
      {
        name:"Donjon Poisseux abyssaux",
        level:216,
        nbr_rooms:3,
        nbr_players:6,
        is_UB:false,
        siteUrl:"",
        backgroundImage:"",
        description:""
      },
  ];
  }
}
