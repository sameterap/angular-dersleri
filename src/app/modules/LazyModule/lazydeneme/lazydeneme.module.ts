import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazydenemeComponent } from './lazydeneme.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '', pathMatch: 'full', component: LazydenemeComponent
    }])
  ],
  declarations: [LazydenemeComponent]
})
export class LazydenemeModule { }
