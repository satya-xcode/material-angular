import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatListModule,
    MatDividerModule,
  ],
  template: `
    <div class="container">
      <!-- Contact Form -->
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <mat-icon>mail</mat-icon>
            Send Message
          </mat-card-title>
        </mat-card-header>
        <mat-divider></mat-divider>
        <mat-card-content>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
            <div class="form-row">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Name</mat-label>
                <input matInput formControlName="name" placeholder="Your Name" />
                <mat-icon matSuffix>person</mat-icon>
                <mat-error *ngIf="contactForm.get('name')?.hasError('required')">
                  Name is required
                </mat-error>
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Email</mat-label>
                <input
                  matInput
                  formControlName="email"
                  placeholder="your.email@example.com"
                  type="email"
                />
                <mat-icon matSuffix>email</mat-icon>
                <mat-error *ngIf="contactForm.get('email')?.hasError('required')">
                  Email is required
                </mat-error>
                <mat-error *ngIf="contactForm.get('email')?.hasError('email')">
                  Please enter a valid email
                </mat-error>
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Subject</mat-label>
                <input matInput formControlName="subject" placeholder="Message Subject" />
                <mat-icon matSuffix>subject</mat-icon>
                <mat-error *ngIf="contactForm.get('subject')?.hasError('required')">
                  Subject is required
                </mat-error>
              </mat-form-field>
            </div>

            <div class="form-row">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Message</mat-label>
                <textarea
                  matInput
                  formControlName="message"
                  placeholder="Your message here..."
                  rows="6"
                ></textarea>
                <mat-error *ngIf="contactForm.get('message')?.hasError('required')">
                  Message is required
                </mat-error>
                <mat-error *ngIf="contactForm.get('message')?.hasError('minlength')">
                  Message must be at least 10 characters long
                </mat-error>
              </mat-form-field>
            </div>

            <div class="form-actions">
              <button
                mat-raised-button
                color="primary"
                type="submit"
                [disabled]="!contactForm.valid"
                class="submit-button"
              >
                <mat-icon>send</mat-icon>
                Send Message
              </button>

              <button mat-stroked-button color="warn" type="button" (click)="onReset()">
                <mat-icon>clear</mat-icon>
                Clear
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>

      <!-- Contact Information -->
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <mat-icon>contact_mail</mat-icon>
            Contact Information
          </mat-card-title>
        </mat-card-header>
        <mat-divider></mat-divider>
        <mat-card-content>
          <mat-list>
            <mat-list-item>
              <mat-icon matListItemIcon color="primary">email</mat-icon>
              <div matListItemTitle>Email</div>
              <div matListItemLine>john.doe@example.com</div>
            </mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item>
              <mat-icon matListItemIcon color="primary">phone</mat-icon>
              <div matListItemTitle>Phone</div>
              <div matListItemLine>+1 (555) 123-4567</div>
            </mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item>
              <mat-icon matListItemIcon color="primary">location_on</mat-icon>
              <div matListItemTitle>Address</div>
              <div matListItemLine>123 Main Street, New York, NY 10001</div>
            </mat-list-item>
            <mat-divider></mat-divider>
            <mat-list-item>
              <mat-icon matListItemIcon color="primary">schedule</mat-icon>
              <div matListItemTitle>Availability</div>
              <div matListItemLine>Monday - Friday, 9:00 AM - 6:00 PM EST</div>
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
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 24px;
    }
    
    .contact-form {
      padding: 16px 0;
    }
    
    .form-row {
      margin-bottom: 16px;
    }
    
    .full-width {
      width: 100%;
    }
    
    .form-actions {
      display: flex;
      gap: 16px;
      margin-top: 24px;
    }
    
    .submit-button {
      flex: 1;
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 16px;
        grid-template-columns: 1fr;
        gap: 16px;
      }
      
      .form-actions {
        flex-direction: column;
      }
    }
  `,
})
export class ContactPage {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Simulate form submission
      console.log('Form submitted:', this.contactForm.value);

      this.snackBar.open('Message sent successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      this.contactForm.reset();
    }
  }

  onReset() {
    this.contactForm.reset();
  }
}
