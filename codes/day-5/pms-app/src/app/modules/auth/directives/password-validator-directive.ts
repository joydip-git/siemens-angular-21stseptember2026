import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { passwordcheck } from "../validators/password-check";

// const ng_val = new InjectionToken<Validator>('ng_val')
@Directive({
    selector: '[passwordvalidator]',
    providers: [
        {
            useExisting: PasswordValidator,
            multi: true,
            provide: NG_VALIDATORS
        }
    ]
})
export class PasswordValidator implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        if (control)
            return passwordcheck(control)
        else
            return null
    }
    registerOnValidatorChange?(fn: () => void): void {

    }

}