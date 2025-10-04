import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { UserData, Project, ContactForm } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userData = signal<UserData | null>(null);
  projects = signal<Project[]>([]);

  constructor(private http: HttpClient) {
    this.loadUserData();
  }

  private loadUserData(): void {
    this.http.get<UserData>('assets/user-data.json').subscribe({
      next: (data) => {
        this.userData.set(data);
        this.projects.set(data.projects);
      },
      error: (err) => {
        console.error('Failed to load user data:', err);
        // Fallback data
        const fallbackData: UserData = {
          name: "Satyendra Rajbhar",
          title: "Full Stack Developer | Angular & Node.js Enthusiast",
          short_bio: "Building modern web applications with Angular, Node.js, and scalable backend solutions.",
          about: "I am a passionate Full Stack Developer with a BCA degree and strong expertise in Angular, Node.js, TypeScript, and modern frontend frameworks. I enjoy building scalable, responsive, and user-friendly web applications.",
          skills: ["Angular", "TypeScript", "JavaScript", "Node.js", "MongoDB", "HTML5", "CSS3"],
          projects: [],
          contact: { email: "satyendra@example.com", phone: "+91-9876543210" },
          social: { github: "https://github.com/satyendra", linkedin: "https://linkedin.com/in/satyendra", twitter: "https://twitter.com/satyendra" }
        };
        this.userData.set(fallbackData);
      }
    });
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects()).pipe(delay(300));
  }

  getProjectById(id: string): Project | undefined {
    return this.projects().find(p => p.id === id);
  }

  submitContact(form: ContactForm): Observable<{ success: boolean; message: string }> {
    return of({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    }).pipe(delay(1000));
  }
}
