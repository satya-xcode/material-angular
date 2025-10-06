import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <div class="app-container">
      <mat-toolbar class="frosted-toolbar">
        <span class="brand" routerLink="/" (click)="scrollToTop()">{{ portfolioName }}</span>
        <span class="spacer"></span>
        <!-- Desktop Navigation -->
        <div class="nav-buttons">
          <button
            mat-button
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="scrollToTop()"
          >
            <mat-icon>home</mat-icon>
            Home
          </button>
          <button mat-button routerLink="/about" routerLinkActive="active">
            <mat-icon>person</mat-icon>
            About
          </button>
          <button mat-button routerLink="/contact" routerLinkActive="active">
            <mat-icon>contact_mail</mat-icon>
            Contact
          </button>
        </div>

        <!-- Mobile Menu -->
        <button
          mat-icon-button
          [matMenuTriggerFor]="mobileMenu"
          class="mobile-menu-button"
          aria-label="Mobile menu"
        >
          <mat-icon>menu</mat-icon>
        </button>

        <mat-menu #mobileMenu="matMenu">
          <button
            mat-menu-item
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="scrollToTop(); mobileMenu.closed.emit()"
          >
            <mat-icon>home</mat-icon>
            <span>Home</span>
          </button>
          <button
            mat-menu-item
            routerLink="/about"
            routerLinkActive="active"
            (click)="mobileMenu.closed.emit()"
          >
            <mat-icon>person</mat-icon>
            <span>About</span>
          </button>
          <button
            mat-menu-item
            routerLink="/contact"
            routerLinkActive="active"
            (click)="mobileMenu.closed.emit()"
          >
            <mat-icon>contact_mail</mat-icon>
            <span>Contact</span>
          </button>
        </mat-menu>
      </mat-toolbar>

      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: `
    .app-container {
      height: 100vh;
      overflow: hidden;
      position: relative;
    }
  
    .main-content {
      height: 100vh;
      overflow-y: auto;
      position: relative;
      z-index: 1;
      /* Add padding to ensure content isn't hidden behind toolbar */
      padding-top: 64px;
    }
  
    .active {
      background: rgba(240, 165, 165, 0.42);
    }
    
    .frosted-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 2;
      height: 64px;
      
      /* Frosted glass effect */
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.18);
      
      /* Optional: Add a slight shadow for better depth */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .spacer {
      flex: 1 1 auto;
    }
    
    .brand {
      font-weight: bold;
      margin-right: 16px;
      cursor: pointer;
      font-size: 1.25rem;
    }
    
    .nav-buttons {
      display: flex;
      gap: 8px;
    }
    
    .mobile-menu-button {
      display: none;
    }
    
    @media (max-width: 768px) {
      .nav-buttons {
        display: none;
      }
      
      .mobile-menu-button {
        display: block;
      }
      
      /* Adjust padding for mobile if needed */
      .main-content {
        padding-top: 56px;
      }
      
      .frosted-toolbar {
        height: 56px;
      }
    }

    /* Optional: Dark theme support */
    @media (prefers-color-scheme: dark) {
      .frosted-toolbar {
        background: rgba(0, 0, 0, 0.25);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }
  `,
})
export class App {
  title = 'matangu';
  portfolioName = 'My Portfolio';

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
