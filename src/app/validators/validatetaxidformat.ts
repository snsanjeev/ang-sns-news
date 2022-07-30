import { AbstractControl } from "@angular/forms";

export function ValidateTaxIDFormat(control : AbstractControl){

    const value = control.value as string;
    const formatRegex = /[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/

    if (value && value.match(formatRegex)) {
      return null
    }

    return { taxidFormat: true }
} 