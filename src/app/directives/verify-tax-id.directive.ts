import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { VerifyTaxID } from '../validators/verifytaxid';

@Directive({
  selector: '[verifyTaxId]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: VerifyTaxIdDirective,
    multi: true
  }]
})
export class VerifyTaxIdDirective implements Validator {

  @Input("verifyTaxId") controls !: string[]
  constructor() { }

  validate(form: AbstractControl<any, any>): ValidationErrors | null {
    if (this.controls){
      return VerifyTaxID(this.controls[0], this.controls[1])(form);

      // const lastName = this.controls[0]
       // const taxId = this.controls[1];

      // const lastNameControl = form.get(lastName)?.value?.slice(0,1).toLowerCase()
      // const taxIdControl = form.get(taxId)?.value.slice(4,5).toLowerCase()

      // if (lastNameControl === taxIdControl) {
      //   return null
      // }

      // return { taxId: true}
    }
    return null
  }

}
