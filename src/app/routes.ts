import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormComponent } from './components/form/form.component';
import { UserComponent } from './components/user/user.component';
import { UserListResolver } from './resolvers/user-list.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    children: [
      { path: 'users', component: UserListComponent, resolve: { users: UserListResolver } },
      { path: 'users/:id', component: UserComponent },
      { path: 'form', component: FormComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
