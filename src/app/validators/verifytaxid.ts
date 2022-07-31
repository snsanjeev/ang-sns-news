import { AbstractControl } from "@angular/forms";

export function VerifyTaxID(lastname: string, taxID: string) {

    return function (form: AbstractControl) {

        const lastnameControl = form.get(lastname)?.value
        const taxIDControl = form.get(taxID)?.value

        const lastNameValue = lastnameControl?.slice(0, 1).toLowerCase();
        const taxIDValue = taxIDControl?.slice(4, 5).toLowerCase();
        if (lastNameValue === taxIDValue)
            return null;
        return { taxID: true }
    }

}