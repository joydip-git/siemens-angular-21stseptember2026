import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordcheck: ValidatorFn = (control: AbstractControl<any, any, any>): ValidationErrors | null => {
    const value = control.value as string
    if (value !== null) {
        if (value.length < 6 || value.length > 10)
            return {
                passwordcheck: {
                    length: value.length,
                    maxlength: 10,
                    minlength: 6
                }
            };
        else
            return null
    } else
        return null
}