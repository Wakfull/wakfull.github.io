import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GameplaysNavbarComponent } from '../gameplays-navbar/gameplays-navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-gameplays-page-layout',
    imports: [RouterOutlet, GameplaysNavbarComponent],
    templateUrl: './gameplays-page-layout.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './gameplays-page-layout.component.css'
})
export class GameplaysPageLayoutComponent {

}
