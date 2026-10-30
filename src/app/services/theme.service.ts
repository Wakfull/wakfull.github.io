import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    // Use the OS-level color scheme preference when no theme was chosen yet
    private readonly fallback = (): Theme => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    readonly theme$ = new BehaviorSubject<Theme>(this.initial());

    constructor() {}

    private initial(): Theme {
        // The prerenderer runs in Node where no DOM exists
        if (typeof window === 'undefined') {
            return 'light';
        }
        const stored = localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }
        return this.fallback();
    }

    get current(): Theme {
        return this.theme$.value;
    }

    toggle(): void {
        this.set(this.current === 'light' ? 'dark' : 'light');
    }

    set(theme: Theme): void {
        this.theme$.next(theme);
        // The prerenderer runs in Node where no DOM exists
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-bs-theme', theme);
    }
}
