import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '', component: Home
            },
            {
                path: 'about', component: About
            },
            {
                path: 'skills', component: Skills
            },
            {
                path: 'projects', component: Projects
            }
        ]
    }
];
