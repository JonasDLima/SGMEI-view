import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { LoginService } from "src/app/views/login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private loginService: LoginService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.loginService.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if (token && !this.loginService.isTokenExpired(token)) {
            request = req.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        return next.handle(request)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('Ocorreu um erro:', error.error.message);
        } else {
            console.error(
                `Códigodo erro ${error.status}, ` +
                `Erro: ${JSON.stringify(error.error)}`);
        }

        return throwError(() => 'Ocorreu um erro, tente novamente');
    }
}