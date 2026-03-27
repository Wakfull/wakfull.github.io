import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { StuffsNavbarComponent } from '../stuffs-navbar/stuffs-navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-stuff-pages-layout',
    imports: [RouterOutlet, StuffsNavbarComponent],
    templateUrl: './stuff-pages-layout.component.html',
    styleUrl: './stuff-pages-layout.component.css'
})
export class StuffPagesLayoutComponent {

}
