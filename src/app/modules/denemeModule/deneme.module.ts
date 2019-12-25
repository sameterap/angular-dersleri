import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DenemeComponent } from './components/deneme/deneme.component';
import { DigerComponent } from './components/diger/diger.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DenemeComponent, DigerComponent],
  exports:[DenemeComponent]
})
export class DenemeModule { }
