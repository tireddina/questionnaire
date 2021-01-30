import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminFirstComponent } from './components/admin-first/admin-first.component';
import { AdminSecondComponent } from './components/admin-second/admin-second.component';
import { AdminThirdComponent } from './components/admin-third/admin-third.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { TestComponent } from './components/test/test.component';
import { AdminDetailedComponent } from './components/admin-detailed/admin-detailed.component';
import { AdminResponsesComponent } from './components/admin-responses/admin-responses.component';
import { RegistrationComponent } from './pages/registration/registration.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: '1', component: AdminFirstComponent },
    { path: '2', component: AdminSecondComponent},
    { path: '3', component: AdminThirdComponent},
    { path: 'list', component: AdminListComponent },
    { path: 'detailed/:id', component: AdminDetailedComponent },
    { path: 'respons/:id', component: AdminResponsesComponent }
  ] },
  { path: 'test/:id', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
