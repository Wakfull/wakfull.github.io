import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  aekIconUrl = "https://i.imgur.com/ynRo8lH.png"; // old : "https://i.imgur.com/VePAzK3.png";

  // Not private: the template binds to it for the toggle button
  readonly theme: ThemeService;

  constructor(theme: ThemeService) {
    this.theme = theme;
  }

  ngOnInit(): void {
    // Keep the <html data-bs-theme> attribute in sync with the persisted theme
    this.theme.set(this.theme.current);
  }
}
