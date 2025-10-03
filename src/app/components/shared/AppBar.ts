import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <mat-toolbar color="primary" class="fixed-toolbar">
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
  `,
  styles: `
    .active{
         background: rgba(240, 165, 165, 0.42);
    }
    .fixed-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
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
    
    // button[routerLinkActive="active"] {
    //   background: rgba(240, 165, 165, 0.42);
    // }
    
    @media (max-width: 768px) {
      .nav-buttons {
        display: none;
      }
      
      .mobile-menu-button {
        display: block;
      }
    }
  `,
})
export class AppBar {
  portfolioName = 'My Portfolio';
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
