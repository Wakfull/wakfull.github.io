import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GlossaryService } from './glossary.service';

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './glossary.component.html',
  styleUrl: './glossary.component.css'
})
export class GlossaryComponent {


  searchTerm:string = "";
  filteredWordList: { word: string, definition: string }[] = []; // List containing the results after user uses the input to search for a word (he searchTerm)
  wordList: { word:string, definition:string }[] = [];

  // Reminder : sorting in constructor rather than onInit because that way the starting list is statically generated once when building. This avoids having to have the client sort the array every single time the page first loads.
  constructor(private glossaryServ: GlossaryService){
    this.wordList = this.glossaryServ.getWordList();
    this.sortWordList();
    this.filteredWordList = [...this.wordList];
  }

  sortWordList() {
    this.wordList.sort((a, b) => a.word.localeCompare(b.word));
  }

  // TODO: (Maybe) use better fuzzy search ? Maybe Fuse.js ? Maybe not needed ...
  filterList(){
    const term = this.removeAccents(this.searchTerm.toLowerCase());
    this.filteredWordList = this.wordList.filter(
      item => this.removeAccents(item.word.toLowerCase()).includes(term)
    );
  }

  /* NFD normalisation "breaks apart" the letters and their accents. Ex :"à" becomes "a `", then the replace regex removes (replace with nothing) the characters that are accents.
  This works because Unicode conveniently has those accents between u0300 and u36f.
  So we can just remove everything between these two included, and accents are removed.*/
  removeAccents(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

}
