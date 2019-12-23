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

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      GirisComponent,
      ParentComponent,
      ChildComponent,
      ComponentLeftComponent,
      ComponentRightComponent
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
