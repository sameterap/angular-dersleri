import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  userForm: FormGroup;
  private destroySubject = new Subject<void>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.prepareForm();
    this.listenChanges();
  }

  prepareForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: ['']
      }),
      additional: this.fb.array([
        this.fb.control('')
      ])
    }, { validators: this.passwordMatchValidator });
  }

  get additionalArray() {
    return this.userForm.get('additional') as FormArray;
  }


  addAdditional() {
    this.additionalArray.push(this.fb.control(''));
  }

  passwordMatchValidator(formGroup: FormGroup): any {
    return formGroup.get('password').value === formGroup.get('confirmpassword').value ? null : { 'mismatch': true };
  }

  listenChanges() {
    this.userForm.valueChanges
      .pipe(
        debounceTime(1000),
        takeUntil(this.destroySubject))
      .subscribe(data => {
        console.log(data);
      });
  }

  sampleFetchedData(): any {
    const data = { firstName: "Samet", lastName: "Erap", password: "1234", confirmpassword: "1234", address: { street: "yok", city: "yok" }, additional: [""] };

    return data;
  }

  getData() {
    this.userForm.patchValue(this.sampleFetchedData(), { emitEvent: false });
  }

  clearData() {
    this.prepareForm();
    // this.userForm.reset({emitEvent: false});
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

}
