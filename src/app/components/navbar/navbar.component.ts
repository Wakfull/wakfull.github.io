import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  aekIconUrl = "https://i.imgur.com/ynRo8lH.png"; // old : "https://i.imgur.com/VePAzK3.png";

}
