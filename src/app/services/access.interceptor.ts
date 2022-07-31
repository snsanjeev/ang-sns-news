import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = window.sessionStorage.getItem("accessToken");

    if (accessToken) {
      const clonedRequest = request.clone({
        setHeaders: {
          accessToken: accessToken
        }
      })
      return next.handle(clonedRequest)

    }
    return next.handle(request);
  }
}
