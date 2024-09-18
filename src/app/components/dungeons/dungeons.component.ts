import { Component } from '@angular/core';
import { DungeonPreviewComponent } from './dungeon-preview/dungeon-preview.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DungeonService } from '../../services/dungeon.service';
import { FormsModule } from '@angular/forms';

interface PreviewDungeonItem {
  name:string,
  level:Number,
  nbr_rooms:Number,
  nbr_players:Number,
  is_UB:Boolean,
  siteUrl:string,
  backgroundImage?:string,
  description?:string
}

@Component({
  selector: 'app-dungeons',
  standalone: true,
  imports: [RouterModule, CommonModule, DungeonPreviewComponent, FormsModule],
  templateUrl: './dungeons.component.html',
  styleUrl: './dungeons.component.css'
})
export class DungeonsComponent {

  previews: PreviewDungeonItem[] = [];
  sortedPreviews: PreviewDungeonItem[] = [];
  searchTerm:string = "";
  currentPage = 1;
  pageSize = 12;

  totalPages = 1;
  totalPagesSorted = 1;

  constructor( private dgServ:DungeonService){
    this.previews = dgServ.getAllDungeons();
    this.sortedPreviews =[...this.previews];
    this.totalPages = Math.ceil(this.previews.length / this.pageSize);
    this.actualiseTotalPagesSorted();
  }

  filterList(){
    const term = this.removeAccents(this.searchTerm.toLowerCase());
    this.sortedPreviews = this.previews.filter(
      item => this.removeAccents(item.name.toLowerCase()).includes(term)
    );
    this.actualiseTotalPagesSorted();
  }

  removeAccents(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  previousPage(){
    this.currentPage -=1;
  }
  nextPage(){
    this.currentPage +=1;
  }

  actualiseTotalPagesSorted(){
    this.totalPagesSorted = Math.ceil(this.sortedPreviews.length / this.pageSize);
  }

}
