import { Component } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

import { ClassesService } from '../../services/classes.service';
import { IconItem } from '../../interfaces/iIconItem';

export class TierRow {
  guid : string
  title ?:string;
  items :TierItem[];

  constructor(title ?:string, items ?:TierItem[]){ 
    this.guid = self.crypto.randomUUID();
    this.title = title ||"";
    this.items = items || [];
  }
}

export class TierItem {
  guid : string
  title ?:string;
  imgUrl?: string;

  constructor(title ?:string, imgUrl ?:string){
    this.guid = self.crypto.randomUUID();
    this.title = title || "";
    this.imgUrl = imgUrl;
  }
}

interface IconDictionary {
  [key: string]: {
    maleImgUrl: string;
    femaleImgUrl: string;
  };
};

@Component({
  selector: 'app-tierlist-maker',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CommonModule],
  templateUrl: './tierlist-maker.component.html',
  styleUrl: './tierlist-maker.component.css'
})
export class TierlistMakerComponent {

  tierlistTitle:string = "Make your own tierlist !";
  rows :TierRow[] = [];
  itemsPool :TierRow = new TierRow();
  itemPoolTitle ="Entity pool";
  tiersCount = 1;

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

  classesIconsDic: IconDictionary = {};

  constructor(private classesServ :ClassesService){
    this.classesIconsDic = classesServ.getClassesIconsDic();
    this.populateAllIcons();

    /*for(let i = 1; i<41;i++){
      this.addItemToBaseItemPool(new TierItem("Item" + i));
    }*/
      this.addNewRow();
      this.addNewRow();
      this.addNewRow();

  }

  connectedDropLists(): string[] {
    // Returns the IDs of all rows as connected drop lists
    let maptoReturn = this.rows.map(row => row.guid);
    maptoReturn.push(this.itemsPool.guid);
    return maptoReturn;
  }

  addRow(row:TierRow){
    this.rows.push(row);
  }
  addNewRow(){
    this.rows.push(new TierRow("Tier " + this.tiersCount));
    this.tiersCount ++;
  }

  removeRow(guid:string){
    this.rows = this.rows.filter(x=> x.guid != guid);
  }
  removeLastRow(){
    this.rows.pop();
    this.tiersCount = Math.max(1, this.tiersCount - 1); // To prevent going negative. oops.
  }

  addItemByRowGuid(itemToAdd:TierItem, rowGuid:string) :any{
    this.rows.find(x => x.guid == rowGuid)?.items.push(itemToAdd);
  }
  addItemByRow(itemToAdd:TierItem, row:TierRow) :any{
    this.addItemByRowGuid(itemToAdd, row.guid);
  }

  addItemToBaseItemPool(item:TierItem){
    this.itemsPool.items.push(item);
  }

  drop(event: CdkDragDrop<TierItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  populateAllIcons(){
    this.itemsPool = new TierRow(this.itemPoolTitle);

    this.addItemToBaseItemPool(new TierItem("Cra", this.classesIconsDic["Cra"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Eliotrope", this.classesIconsDic["Eliotrope"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Ecaflip", this.classesIconsDic["Ecaflip"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Eniripsa", this.classesIconsDic["Eniripsa"]?.femaleImgUrl));

    this.addItemToBaseItemPool(new TierItem("Enutrof", this.classesIconsDic["Enutrof"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Feca", this.classesIconsDic["Feca"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Steamer", this.classesIconsDic["Steamer"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Huppermage", this.classesIconsDic["Huppermage"]?.femaleImgUrl));

    this.addItemToBaseItemPool(new TierItem("Iop", this.classesIconsDic["Iop"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Osamodas", this.classesIconsDic["Osamodas"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Ouginak", this.classesIconsDic["Ouginak"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Pandawa", this.classesIconsDic["Pandawa"]?.femaleImgUrl));

    this.addItemToBaseItemPool(new TierItem("Roublard", this.classesIconsDic["Roublard"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Sacrieur", this.classesIconsDic["Sacrieur"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Sadida", this.classesIconsDic["Sadida"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Sram", this.classesIconsDic["Sram"]?.femaleImgUrl));

    this.addItemToBaseItemPool(new TierItem("Xelor", this.classesIconsDic["Xelor"]?.femaleImgUrl));
    this.addItemToBaseItemPool(new TierItem("Zobal", this.classesIconsDic["Zobal"]?.femaleImgUrl));
  }

}