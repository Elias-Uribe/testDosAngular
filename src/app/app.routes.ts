import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoUsuarioComponent } from './pages/info-usuario/info-usuario.component';
import { DetailsPostComponent } from './pages/details-post/details-post.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user/:id',
    component: InfoUsuarioComponent,
  },
  {
    path: 'details-post/:id',
    component: DetailsPostComponent,
  },
];
