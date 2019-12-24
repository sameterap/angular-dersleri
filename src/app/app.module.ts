import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GirisComponent } from './giris/giris.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ComponentLeftComponent } from './components/component-left/component-left.component';
import { ComponentRightComponent } from './components/component-right/component-right.component';
import { ButtonComponent } from './components/button/button.component';
import { HasRoleDirective } from './directives/hasRole.directive';

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
      HasRoleDirective
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
