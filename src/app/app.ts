import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBar } from './components/shared/AppBar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppBar],
  template: `
    <div class="app-container">
      <app-bar />
      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: `
    .app-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden; /* Prevent entire app from scrolling */
    }
    
    .main-content {
      flex: 1;
      margin-top: 64px; /* Default Material toolbar height */
      overflow-y: auto; /* Enable vertical scrolling */
      height: calc(100vh - 64px); /* Full height minus toolbar */
    }
    
    @media (max-width: 599px) {
      .main-content {
        margin-top: 56px; /* Mobile toolbar height */
        height: calc(100vh - 56px); /* Adjust height for mobile */
      }
    }
  `,
})
export class App {
  title = 'matangu';
}
