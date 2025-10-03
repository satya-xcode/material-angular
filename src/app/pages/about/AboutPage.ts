import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    MatIconModule,
  ],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <mat-icon>person</mat-icon>
            About Me
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-tab-group>
            <!-- Experience Tab -->
            <mat-tab label="Experience">
              <div class="tab-content">
                <mat-accordion>
                  <mat-expansion-panel>
                    <mat-expansion-panel-header>
                      <mat-panel-title> Senior Frontend Developer </mat-panel-title>
                      <mat-panel-description> Tech Company • 2022 - Present </mat-panel-description>
                    </mat-expansion-panel-header>
                    <p>
                      Leading frontend development team, architecting scalable Angular applications,
                      and mentoring junior developers.
                    </p>
                    <div class="chips-container">
                      <mat-chip>Angular</mat-chip>
                      <mat-chip>TypeScript</mat-chip>
                      <mat-chip>RxJS</mat-chip>
                    </div>
                  </mat-expansion-panel>

                  <mat-expansion-panel>
                    <mat-expansion-panel-header>
                      <mat-panel-title> Full Stack Developer </mat-panel-title>
                      <mat-panel-description> Startup Inc • 2020 - 2022 </mat-panel-description>
                    </mat-expansion-panel-header>
                    <p>
                      Developed and maintained web applications using Angular and Node.js,
                      implemented RESTful APIs, and collaborated with cross-functional teams.
                    </p>
                    <div class="chips-container">
                      <mat-chip>Angular</mat-chip>
                      <mat-chip>Node.js</mat-chip>
                      <mat-chip>MongoDB</mat-chip>
                    </div>
                  </mat-expansion-panel>

                  <mat-expansion-panel>
                    <mat-expansion-panel-header>
                      <mat-panel-title> Junior Web Developer </mat-panel-title>
                      <mat-panel-description> Web Agency • 2018 - 2020 </mat-panel-description>
                    </mat-expansion-panel-header>
                    <p>
                      Built responsive websites and web applications, collaborated with designers,
                      and implemented client requirements.
                    </p>
                    <div class="chips-container">
                      <mat-chip>JavaScript</mat-chip>
                      <mat-chip>HTML/CSS</mat-chip>
                      <mat-chip>React</mat-chip>
                    </div>
                  </mat-expansion-panel>
                </mat-accordion>
              </div>
            </mat-tab>

            <!-- Education Tab -->
            <mat-tab label="Education">
              <div class="tab-content">
                <mat-list>
                  <mat-list-item>
                    <mat-icon matListItemIcon>school</mat-icon>
                    <div matListItemTitle>Master of Computer Science</div>
                    <div matListItemLine>University of Technology • 2018 - 2020</div>
                  </mat-list-item>
                  <mat-divider></mat-divider>
                  <mat-list-item>
                    <mat-icon matListItemIcon>school</mat-icon>
                    <div matListItemTitle>Bachelor of Software Engineering</div>
                    <div matListItemLine>State University • 2014 - 2018</div>
                  </mat-list-item>
                </mat-list>
              </div>
            </mat-tab>

            <!-- Certifications Tab -->
            <mat-tab label="Certifications">
              <div class="tab-content">
                <mat-list>
                  <mat-list-item>
                    <mat-icon matListItemIcon>verified</mat-icon>
                    <div matListItemTitle>Angular Certified Developer</div>
                    <div matListItemLine>Google • 2023</div>
                  </mat-list-item>
                  <mat-divider></mat-divider>
                  <mat-list-item>
                    <mat-icon matListItemIcon>verified</mat-icon>
                    <div matListItemTitle>AWS Certified Solutions Architect</div>
                    <div matListItemLine>Amazon • 2022</div>
                  </mat-list-item>
                  <mat-divider></mat-divider>
                  <mat-list-item>
                    <mat-icon matListItemIcon>verified</mat-icon>
                    <div matListItemTitle>Scrum Master Certification</div>
                    <div matListItemLine>Scrum Alliance • 2021</div>
                  </mat-list-item>
                </mat-list>
              </div>
            </mat-tab>
          </mat-tab-group>
        </mat-card-content>
      </mat-card>

      <!-- Personal Info Card -->
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <mat-icon>info</mat-icon>
            Personal Information
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-list>
            <mat-list-item>
              <mat-icon matListItemIcon>email</mat-icon>
              <div matListItemTitle>Email</div>
              <div matListItemLine>john.doe@example.com</div>
            </mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item>
              <mat-icon matListItemIcon>phone</mat-icon>
              <div matListItemTitle>Phone</div>
              <div matListItemLine>+1 (555) 123-4567</div>
            </mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item>
              <mat-icon matListItemIcon>location_on</mat-icon>
              <div matListItemTitle>Location</div>
              <div matListItemLine>New York, NY</div>
            </mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item>
              <mat-icon matListItemIcon>language</mat-icon>
              <div matListItemTitle>Languages</div>
              <div matListItemLine>English (Native), Spanish (Intermediate)</div>
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
    
    .tab-content {
      padding: 16px 0;
    }
    
    .chips-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 16px;
      }
    }
  `,
})
export class AboutPage {}
