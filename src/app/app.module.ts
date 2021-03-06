import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GirisComponent } from './giris/giris.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ComponentLeftComponent } from './components/component-left/component-left.component';
import { ComponentRightComponent } from './components/component-right/component-right.component';
import { ButtonComponent } from './components/button/button.component';
import { HasRoleDirective } from './directives/hasRole.directive';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormComponent } from './components/form/form.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListResolver } from './resolvers/user-list.resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap';
import { DenemeModule } from './modules/denemeModule/deneme.module';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      GirisComponent,
      ParentComponent,
      ChildComponent,
      ComponentLeftComponent,
      ComponentRightComponent,
      ButtonComponent,
      HasRoleDirective,
      HomeComponent,
      UserListComponent,
      FormComponent,
      NavbarComponent,
      UserComponent,
      FileUploaderComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      FileUploadModule,
      ReactiveFormsModule,
      HttpClientModule,
      DenemeModule,
      PaginationModule.forRoot(),
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
   ],
   providers: [
     UserListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
