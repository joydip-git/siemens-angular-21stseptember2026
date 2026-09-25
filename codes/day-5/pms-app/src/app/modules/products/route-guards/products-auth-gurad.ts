import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { TokenService } from "../../shared/services/token-service";

export const ProductAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {

    const router = inject(Router)
    const tokenSvc = inject(TokenService)
    if (!tokenSvc.isLoggedIn()) {
        // router.navigate(['/auth/login'], {
        //     queryParams: { returnUrl: state.url }
        // })
        // return false
        return router.createUrlTree(['/auth/login'], {
            queryParams: { returnUrl: state.url }
        })
    } else
        return true
}