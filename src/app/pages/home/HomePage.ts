import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
    MatProgressBarModule,
    RouterLink,
  ],
  template: `
    <div class="container">
      <!-- Hero Section -->
      <mat-card class="hero-card">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="mat-headline-large">Hello, I'm John Doe</h1>
            <h2 class="mat-title-large">Full Stack Developer</h2>
            <p class="mat-body-large">
              Passionate about creating amazing web experiences with Angular and modern
              technologies.
            </p>
            <div class="hero-actions">
              <button mat-raised-button color="primary" routerLink="/about">
                <mat-icon>person</mat-icon>
                About Me
              </button>
              <button mat-stroked-button color="primary" routerLink="/contact">
                <mat-icon>mail</mat-icon>
                Contact
              </button>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-placeholder">
              <mat-icon class="image-icon">person</mat-icon>
            </div>
          </div>
        </div>
      </mat-card>

      <!-- Skills Section -->
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <mat-icon>code</mat-icon>
            Technical Skills
          </mat-card-title>
        </mat-card-header>
        <mat-divider></mat-divider>
        <mat-card-content>
          <div class="skills-grid">
            <div class="skill-item">
              <span>Angular</span>
              <mat-progress-bar mode="determinate" value="90" color="primary"></mat-progress-bar>
            </div>
            <div class="skill-item">
              <span>TypeScript</span>
              <mat-progress-bar mode="determinate" value="85" color="primary"></mat-progress-bar>
            </div>
            <div class="skill-item">
              <span>JavaScript</span>
              <mat-progress-bar mode="determinate" value="88" color="primary"></mat-progress-bar>
            </div>
            <div class="skill-item">
              <span>HTML/CSS</span>
              <mat-progress-bar mode="determinate" value="95" color="primary"></mat-progress-bar>
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Technologies Section -->
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <mat-icon>build</mat-icon>
            Technologies
          </mat-card-title>
        </mat-card-header>
        <mat-divider></mat-divider>
        <mat-card-content>
          <div class="chips-container">
            <mat-chip>Angular</mat-chip>
            <mat-chip>TypeScript</mat-chip>
            <mat-chip>RxJS</mat-chip>
            <mat-chip>NgRx</mat-chip>
            <mat-chip>Material UI</mat-chip>
            <mat-chip>Node.js</mat-chip>
            <mat-chip>MongoDB</mat-chip>
            <mat-chip>Firebase</mat-chip>
            <mat-chip>Git</mat-chip>
            <mat-chip>Docker</mat-chip>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Quick Stats -->
      <div class="stats-grid">
        <mat-card>
          <mat-card-content class="stat-item">
            <mat-icon color="primary">work</mat-icon>
            <h3>50+</h3>
            <p>Projects Completed</p>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-content class="stat-item">
            <mat-icon color="primary">groups</mat-icon>
            <h3>30+</h3>
            <p>Happy Clients</p>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-content class="stat-item">
            <mat-icon color="primary">schedule</mat-icon>
            <h3>5+</h3>
            <p>Years Experience</p>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Additional Content to Demonstrate Scrolling -->
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <mat-icon>collections</mat-icon>
            Featured Projects
          </mat-card-title>
        </mat-card-header>
        <mat-divider></mat-divider>
        <mat-card-content>
          <div class="projects-grid">
            <mat-card appearance="outlined">
              <mat-card-header>
                <mat-card-title>E-Commerce Platform</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <p>Full-stack e-commerce solution built with Angular and Node.js</p>
              </mat-card-content>
            </mat-card>

            <mat-card appearance="outlined">
              <mat-card-header>
                <mat-card-title>Task Management App</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <p>Productive task management application with real-time updates</p>
              </mat-card-content>
            </mat-card>

            <mat-card appearance="outlined">
              <mat-card-header>
                <mat-card-title>Weather Dashboard</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <p>Real-time weather monitoring dashboard with beautiful visualizations</p>
              </mat-card-content>
            </mat-card>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- More content to ensure scrolling -->
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <mat-icon>history_edu</mat-icon>
            Recent Blog Posts
          </mat-card-title>
        </mat-card-header>
        <mat-divider></mat-divider>
        <mat-card-content>
          <mat-list>
            <mat-list-item>
              <mat-icon matListItemIcon>article</mat-icon>
              <div matListItemTitle>Angular Signals: Complete Guide</div>
              <div matListItemLine>Learn how to use Signals in Angular 16+</div>
            </mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item>
              <mat-icon matListItemIcon>article</mat-icon>
              <div matListItemTitle>Material 3 in Angular</div>
              <div matListItemLine>Implementing Material Design 3 in your Angular app</div>
            </mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item>
              <mat-icon matListItemIcon>article</mat-icon>
              <div matListItemTitle>RxJS Best Practices</div>
              <div matListItemLine>Common patterns and anti-patterns in RxJS</div>
            </mat-list-item>
          </mat-list>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: `
    .container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .hero-card {
      margin-bottom: 24px;
    }
    
    .hero-content {
      display: flex;
      align-items: center;
      gap: 48px;
      padding: 32px;
    }
    
    .hero-text {
      flex: 1;
    }
    
    .hero-actions {
      display: flex;
      gap: 16px;
      margin-top: 24px;
    }
    
    .hero-image {
      flex-shrink: 0;
    }
    
    .image-placeholder {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: var(--mat-sys-surface-container);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .image-icon {
      width: 100px;
      height: 100px;
      font-size: 100px;
      color: var(--mat-sys-primary);
    }
    
    .skills-grid {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px 0;
    }
    
    .skill-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .chips-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 16px 0;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
    }
    
    .stat-item {
      text-align: center;
      padding: 24px;
    }
    
    .stat-item mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
      padding: 16px 0;
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 16px;
      }
      
      .hero-content {
        flex-direction: column;
        text-align: center;
        gap: 24px;
        padding: 24px;
      }
      
      .hero-actions {
        justify-content: center;
      }
      
      .image-placeholder {
        width: 150px;
        height: 150px;
      }
      
      .image-icon {
        width: 80px;
        height: 80px;
        font-size: 80px;
      }
      
      .stats-grid {
        grid-template-columns: 1fr;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class HomePage {}
