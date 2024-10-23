import { Component } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

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

  constructor(){
    this.itemsPool = new TierRow(this.itemPoolTitle);
    for(let i = 1; i<41;i++){
      this.addItemToBaseItemPool(new TierItem("Item" + i));
    }
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

}
