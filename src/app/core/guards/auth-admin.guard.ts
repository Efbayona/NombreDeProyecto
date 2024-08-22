import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "@app/modules/authentication/services/authentication.service";

export const AuthAdminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigateByUrl('/').then();
    return false;
  }
  return true;
};





