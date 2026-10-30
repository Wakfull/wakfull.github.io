import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

interface MenuSubItem {
  label: string;
  route: string;
  dividerBefore?: boolean;
}

interface MenuItem {
  id: string;
  label: string;
  route?: string;
  sub?: MenuSubItem[];
}

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {

  aekIconUrl = "https://i.imgur.com/ynRo8lH.png"; // old : "https://i.imgur.com/VePAzK3.png";

  // Single source of truth for the menu, shared by the desktop nav
  // and the mobile dropdown panel
  readonly menuItems: MenuItem[] = [
    { id: 'home', label: 'Home', route: '/home' },
    {
      id: 'builds', label: 'Builds & stuffs',
      sub: [
        { label: 'Avant de se stuff', route: '/beforeGearing' },
        { label: 'Lv 20', route: '/stuff/20', dividerBefore: true },
        { label: 'Lv 50', route: '/stuff/50' },
        { label: 'Lv 80', route: '/stuff/80' },
        { label: 'Lv 110', route: '/stuff/110' },
      ],
    },
    // { id: 'gameplays', label: 'Gameplays', route: '/gameplays' }, // re-enable when the gameplay menu is ready
    {
      id: 'divers', label: 'Divers',
      sub: [
        { label: 'Modulation', route: '/modulation' },
        { label: 'Enchantement', route: '/enchant' },
        { label: 'Sites à connaître', route: '/extResources' },
        { label: 'Themes d\'interface', route: '/themes' },
        { label: 'Comment stream Wakfu', route: '/howToStream' },
      ],
    },
    {
      id: 'astuces', label: 'Astuces',
      sub: [
        { label: 'Bien débuter', route: '/eldersWisdom' },
        { label: 'Faire ses premiers kamas', route: '/kamas' },
      ],
    },
    {
      id: 'breches', label: 'Brèches',
      sub: [
        { label: 'Fonctionnement', route: '/rift' },
        { label: 'Brèche Tainela', route: '/rift/tainela', dividerBefore: true },
        { label: 'Brèche Sufokia', route: '/rift/sufokia' },
      ],
    },
    { id: 'glossary', label: 'Glossaire', route: '/glossary' },
    { id: 'about', label: 'About Me', route: '/about' },
  ];

  // Mobile: is the dropdown panel open + which accordion sections are expanded
  menuOpen = false;
  readonly openSections: Record<string, boolean> = {
    builds: false,
    divers: false,
    astuces: false,
    breches: false,
  };

  // Not private: the template binds to it for the theme toggle button
  readonly theme: ThemeService;

  private navSub?: Subscription;
  private mediaQuery?: MediaQueryList;
  private readonly onBreakpointChange: (e: MediaQueryListEvent) => void = (e) => {
    if (e.matches) {
      // Reached desktop widths: the mobile panel & scroll lock are no longer relevant
      this.closeMenu();
    }
  };

  constructor(theme: ThemeService, private readonly router: Router) {
    this.theme = theme;
  }

  ngOnInit(): void {
    // Keep the <html data-bs-theme> attribute in sync with the persisted theme
    this.theme.set(this.theme.current);

    if (typeof document !== 'undefined') {
      // Close the mobile panel on navigation (clicking any routerLink)
      this.navSub = this.router.events
        .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
        .subscribe(() => this.closeMenu());

      // Close the panel (and unlock scrolling) if the viewport grows past the breakpoint
      this.mediaQuery = window.matchMedia('(min-width: 992px)');
      this.mediaQuery.addEventListener('change', this.onBreakpointChange);
    }
  }

  ngOnDestroy(): void {
    this.navSub?.unsubscribe();
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.onBreakpointChange);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('menu-open');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }

  toggleMenu(): void {
    this.setMenuOpen(!this.menuOpen);
  }

  closeMenu(): void {
    this.setMenuOpen(false);
  }

  toggleSection(id: string): void {
    this.openSections[id] = !this.openSections[id];
  }

  private setMenuOpen(open: boolean): void {
    this.menuOpen = open;
    // Lock background scrolling while the panel is expanded (mobile only).
    // Set inline (a .scss-encapsulated rule cannot reach <html>/<body>)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('menu-open', open);
      document.documentElement.style.overflow = open ? 'hidden' : '';
      document.body.style.overflow = open ? 'hidden' : '';
    }
  }

  // Escape closes the panel, like a standard dropdown
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeMenu();
  }
}
