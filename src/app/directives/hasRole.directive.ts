import { Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {

  @Input() appHasRole: string[];
  isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>) { }

  ngOnInit() {
    const userRoles = ['user']; // auth service'den geldiğini dusunuyoruz.

    if (!userRoles) {
      this.viewContainerRef.clear();
    }

    // this.authservice.rolMatch(this.appHasRole) olması gerekir.
    if (this.roleMatch(this.appHasRole)) {
      if (!this.isVisible) {
        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
      else {
        this.viewContainerRef.clear();
      }
    }
  }

  roleMatch(allowedRoles: string[]): boolean {
    let isMatch = false;

    const userRoles = ['user'];

    allowedRoles.forEach(element => {
      if (userRoles.includes(element)) {
        isMatch = true;
        return;
      }
    });

    return isMatch;

  }

}
