import { Routes } from '@angular/router';
import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { ContactPage } from './pages/contact/ContactPage';

export const routes: Routes = [
    {
        path:'',
        component:HomePage
    },
    {
        path:'about',
        component:AboutPage
    },
    {
        path:'contact',
        component:ContactPage
    }
];
