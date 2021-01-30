import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { AdminComponent } from './pages/admin/admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminFirstComponent } from './components/admin-first/admin-first.component';
import { AdminSecondComponent } from './components/admin-second/admin-second.component';
import { AdminQuestionItemComponent } from './components/admin-question-item/admin-question-item.component';
import { AdminThirdComponent } from './components/admin-third/admin-third.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { TestComponent } from './components/test/test.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { AdminDetailedComponent } from './components/admin-detailed/admin-detailed.component';
import { AdminResponsesComponent } from './components/admin-responses/admin-responses.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminFirstComponent,
    AdminSecondComponent,
    AdminQuestionItemComponent,
    AdminThirdComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    AdminSidebarComponent,
    AdminListComponent,
    TestComponent,
    QuestionCardComponent,
    AdminDetailedComponent,
    AdminResponsesComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
