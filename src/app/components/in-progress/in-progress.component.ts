import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PreviewItem } from '../../interfaces/iPreviewItem';
import { InProgressPreviewComponent } from './in-progress-preview/in-progress-preview.component';

@Component({
  selector: 'app-in-progress',
  standalone: true,
  imports: [RouterModule, CommonModule, InProgressPreviewComponent],
  templateUrl: './in-progress.component.html',
  styleUrl: './in-progress.component.css'
})
export class InProgressComponent {

  previews: PreviewItem[] = []



  constructor(){
    this.previews = [
      { title: "Gameplays", link: "/gameplays", description : "La structure avec les noms des gameplays par classe est là, mais il faut rédiger tous les guides. Le guide elio melee a été rédigé pour donner une idée de résultat de base."},
      { title: "Donjons", link: "/dungeons"},
      { title: "Mimiques", link: "/mimics"},
      { title: "Breche Tainela", link: "/rift/tainela"},
      { title: "Breche Sufokia", link: "/rift/sufokia"},
      { title: "Tierlist maker", link: "/tierlist"},
      { title: "Bettering Wakfu",link : "/bettering-wakfu", description :"Une page de notes de ce que je considère comme étant des problèmes de design ou d'améliorations à faire sur Wakfu. Ceci couvre UI, UX, gameplay ou autre qol. Ce n'est que mon avis."},
    ]
  }
}
