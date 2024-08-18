import { Injectable } from '@angular/core';

interface IconDictionary {
  [key: string]: {
    maleImgUrl: string;
    femaleImgUrl: string;
  };
};

interface IconListItem {
  className:string, 
  image: {
    maleImgUrl:string, 
    femaleImgUrl:string
  }
};

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  chibiIconDictionnary: IconDictionary = 
    {
      "Cra" :{
        maleImgUrl:"https://i.imgur.com/rTaOCuh.png",
        femaleImgUrl:"https://i.imgur.com/tzrcOI3.png"
      },
      "Ecaflip" :{
        maleImgUrl:"https://i.imgur.com/4HjnT8L.png",
        femaleImgUrl:"https://i.imgur.com/u87SVNK.png"
      },
      "Eliotrope" :{
        maleImgUrl:"https://i.imgur.com/bwnHpt6.png",
        femaleImgUrl:"https://i.imgur.com/rCXdNEK.png"
      },
      "Eniripsa" :{
        maleImgUrl:"https://i.imgur.com/ZCoW4jz.png",
        femaleImgUrl:"https://i.imgur.com/kjhEKsE.png"
      },
      "Enutrof" :{
        maleImgUrl:"https://i.imgur.com/Saej7pE.png",
        femaleImgUrl:"https://i.imgur.com/E2hIlov.png"
      },
      "Feca" :{
        maleImgUrl:"https://i.imgur.com/a6d7jc1.png",
        femaleImgUrl:"https://i.imgur.com/tPoynHv.png"
      },
      "Steamer" :{
        maleImgUrl:"https://i.imgur.com/Do6UqWL.png",
        femaleImgUrl:"https://i.imgur.com/E9FDKBz.png"
      },
      "Huppermage" :{
        maleImgUrl:"https://i.imgur.com/EkcDAuv.png",
        femaleImgUrl:"https://i.imgur.com/BWtJlCP.png"
      },
      "Iop" :{
        maleImgUrl:"https://i.imgur.com/SZ8xwwF.png",
        femaleImgUrl:"https://i.imgur.com/Hv2z9me.png"
      },
      "Osamodas" :{
        maleImgUrl:"https://i.imgur.com/XlSrZw7.png",
        femaleImgUrl:"https://i.imgur.com/6KS0pus.png"
      },
      "Ouginak" :{
        maleImgUrl:"https://i.imgur.com/UfvHUHy.png",
        femaleImgUrl:"https://i.imgur.com/iJreOJ4.png"
      },
      "Pandawa" :{
        maleImgUrl:"https://i.imgur.com/jHL2dua.png",
        femaleImgUrl:"https://i.imgur.com/4GuChY5.png"
      },
      "Roublard" :{
        maleImgUrl:"https://i.imgur.com/9sq8Pfz.png",
        femaleImgUrl:"https://i.imgur.com/8ItssMK.png"
      },
      "Sacrieur" :{
        maleImgUrl:"https://i.imgur.com/XDBJbsz.png",
        femaleImgUrl:"https://i.imgur.com/96AzDMl.png"
      },
      "Sadida" :{
        maleImgUrl:"https://i.imgur.com/qKtYTkl.png",
        femaleImgUrl:"https://i.imgur.com/mxtYcLi.png"
      },
      "Sram" :{
        maleImgUrl:"https://i.imgur.com/YKeSW07.png",
        femaleImgUrl:"https://i.imgur.com/DqncOVM.png"
      },
      "Xelor" :{
        maleImgUrl:"https://i.imgur.com/r32eMi8.png",
        femaleImgUrl:"https://i.imgur.com/8CIQYnF.png"
      },
      "Zobal" :{
        maleImgUrl:"https://i.imgur.com/615C4J3.png",
        femaleImgUrl:"https://i.imgur.com/bMgf6Uy.png"
      },

    };


  // Could be made into a service for each, to have something like " CraService.getChibiIcon() ", but would require a lot of boilerplate. Maybe later if website requirements demand it. Currently, it's doing the job, good enough.
  chibiIconList: IconListItem[] = [
    { 
      className:"Cra", 
      image:{
        maleImgUrl:"https://i.imgur.com/rTaOCuh.png",
        femaleImgUrl:"https://i.imgur.com/tzrcOI3.png"
      }
    },
    { className:"Ecaflip", 
      image:{
        maleImgUrl:"https://i.imgur.com/4HjnT8L.png",
        femaleImgUrl:"https://i.imgur.com/u87SVNK.png"
      }
    },
    { className:"Eliotrope", 
      image:{
        maleImgUrl:"https://i.imgur.com/bwnHpt6.png",
        femaleImgUrl:"https://i.imgur.com/rCXdNEK.png"
      }
    },
    { className:"Eniripsa", 
      image:{
        maleImgUrl:"https://i.imgur.com/ZCoW4jz.png",
        femaleImgUrl:"https://i.imgur.com/kjhEKsE.png"
      }
    },
    { className:"Enutrof", 
      image:{
        maleImgUrl:"https://i.imgur.com/Saej7pE.png",
        femaleImgUrl:"https://i.imgur.com/E2hIlov.png"
      }
    },
    { className:"Feca", 
      image:{
        maleImgUrl:"https://i.imgur.com/a6d7jc1.png",
        femaleImgUrl:"https://i.imgur.com/tPoynHv.png"
      }
    },
    { className:"Steamer", 
      image:{
        maleImgUrl:"https://i.imgur.com/Do6UqWL.png",
        femaleImgUrl:"https://i.imgur.com/E9FDKBz.png"
      }
    },
    { className:"Huppermage", 
      image:{
        maleImgUrl:"https://i.imgur.com/EkcDAuv.png",
        femaleImgUrl:"https://i.imgur.com/BWtJlCP.png"
      }
    },
    { className:"Iop", 
      image:{
        maleImgUrl:"https://i.imgur.com/SZ8xwwF.png",
        femaleImgUrl:"https://i.imgur.com/Hv2z9me.png"
      }
    },
    { className:"Osamodas", 
      image:{
        maleImgUrl:"https://i.imgur.com/XlSrZw7.png",
        femaleImgUrl:"https://i.imgur.com/6KS0pus.png"
      }
    },
    { className:"Ouginak", 
      image:{
        maleImgUrl:"https://i.imgur.com/UfvHUHy.png",
        femaleImgUrl:"https://i.imgur.com/iJreOJ4.png"
      }
    },
    { className:"Pandawa", 
      image:{
        maleImgUrl:"https://i.imgur.com/jHL2dua.png",
        femaleImgUrl:"https://i.imgur.com/4GuChY5.png"
      }
    },
    { className:"Roublard", 
      image:{
        maleImgUrl:"https://i.imgur.com/9sq8Pfz.png",
        femaleImgUrl:"https://i.imgur.com/8ItssMK.png"
      }
    },
    { className:"Sacrieur", 
      image:{
        maleImgUrl:"https://i.imgur.com/XDBJbsz.png",
        femaleImgUrl:"https://i.imgur.com/96AzDMl.png"
      }
    },
    { className:"Sadida", 
      image:{
        maleImgUrl:"https://i.imgur.com/qKtYTkl.png",
        femaleImgUrl:"https://i.imgur.com/mxtYcLi.png"
      }
    },
    { className:"Sram", 
      image:{
        maleImgUrl:"https://i.imgur.com/YKeSW07.png",
        femaleImgUrl:"https://i.imgur.com/DqncOVM.png"
      }
    },
    { className:"Xelor", 
      image:{
        maleImgUrl:"https://i.imgur.com/r32eMi8.png",
        femaleImgUrl:"https://i.imgur.com/8CIQYnF.png"
      }
    },
    { className:"Zobal", 
      image:{
        maleImgUrl:"https://i.imgur.com/615C4J3.png",
        femaleImgUrl:"https://i.imgur.com/bMgf6Uy.png"
      }
    },
  ]

  constructor() {

  }

  getChibiIconsList(): IconListItem[] {
    return [...this.chibiIconList];
  }

  getChibiIconsDic(): IconDictionary {
    return {...this.chibiIconDictionnary};
  }
}




