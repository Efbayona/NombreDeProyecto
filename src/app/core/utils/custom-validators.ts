import {AbstractControl, AsyncValidatorFn} from "@angular/forms";
import {catchError, map, of, switchMap, timer} from "rxjs";
import {CustomValidatorsService} from "@app/core/services/custom-validators/custom-validators.service";

export class CustomValidators {

}

export function existUserName(customService: CustomValidatorsService, editingNameUser: string | null = null, debounce = 300): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const username = control.value;

    if (username == editingNameUser) {
      return of(null);
    }

    return timer(debounce).pipe(
      switchMap(() => customService.existUserName(username)),
      map(userExists => (userExists ? {usernameExists: true} : null)),
      catchError(() => of(null))
    );
  };
}

export function existEmail(customService: CustomValidatorsService, editingPersonEmail: string | null = null, debounce = 300): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const email = control.value;

    if (email == editingPersonEmail) {
      return of(null);
    }

    return timer(debounce).pipe(
      switchMap(() => customService.existUserName(email)),
      map(emailExists => (emailExists ? {emailExists: true} : null)),
      catchError(() => of(null))
    );
  };
}

export function existDocument(customService: CustomValidatorsService, editingDocument: string | null = null, debounce = 300): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const document = control.value;

    if (document == editingDocument) {
      return of(null);
    }

    return timer(debounce).pipe(
      switchMap(() => customService.existDocument(document)),
      map(documentExists => (documentExists ? {documentExists: true} : null)),
      catchError(() => of(null))
    );
  };
}

