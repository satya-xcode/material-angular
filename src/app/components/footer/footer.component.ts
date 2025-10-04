import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule],
  template: `
    <mat-toolbar class="footer">
      <div class="container footer-content">
        <span>&copy; 2024 {{ userData()?.name }}. All rights reserved.</span>
        <div class="social-links" *ngIf="userData()?.social">
          <a mat-icon-button [href]="userData()!.social.github" target="_blank" aria-label="GitHub">
            <mat-icon>code</mat-icon>
          </a>
          <a
            mat-icon-button
            [href]="userData()!.social.linkedin"
            target="_blank"
            aria-label="LinkedIn"
          >
            <mat-icon>business</mat-icon>
          </a>
          <a
            mat-icon-button
            [href]="userData()!.social.twitter"
            target="_blank"
            aria-label="Twitter"
          >
            <mat-icon>alternate_email</mat-icon>
          </a>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      .footer {
        margin-top: auto;
      }

      .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .social-links {
        display: flex;
        gap: 8px;
      }

      @media (max-width: 768px) {
        .footer-content {
          flex-direction: column;
          gap: 16px;
          text-align: center;
        }
      }
    `,
  ],
})
export class FooterComponent {
  private dataService = inject(DataService);
  userData = this.dataService.userData;
}
