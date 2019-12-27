import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { FormComponent } from '../components/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<FormComponent> {

  constructor() { }

  canDeactivate(component: FormComponent) {
    if (component.userForm.dirty) {
      return confirm('Bak kapatıyorum ?');
    }

    return true;
  }

}
