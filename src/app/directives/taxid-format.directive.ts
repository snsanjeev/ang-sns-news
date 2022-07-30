import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidateTaxIDFormat } from '../validators/validatetaxidformat';

@Directive({
  selector: '[snsTaxidFormat]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TaxidFormatDirective,
      multi: true
    }
  ]
})
export class TaxidFormatDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    
    return ValidateTaxIDFormat(control)
  }

  constructor() { }

}
