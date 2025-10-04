import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    this.setTheme(isDark);
  }

  toggleTheme(): void {
    const newTheme = !this.darkModeSubject.value;
    this.setTheme(newTheme);
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }

  private setTheme(isDark: boolean): void {
    this.darkModeSubject.next(isDark);
    
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
