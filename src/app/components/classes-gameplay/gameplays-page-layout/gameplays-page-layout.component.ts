import { Component } from '@angular/core';
import { GameplaysNavbarComponent } from '../gameplays-navbar/gameplays-navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gameplays-page-layout',
  standalone: true,
  imports: [RouterOutlet, GameplaysNavbarComponent],
  templateUrl: './gameplays-page-layout.component.html',
  styleUrl: './gameplays-page-layout.component.css'
})
export class GameplaysPageLayoutComponent {

}
