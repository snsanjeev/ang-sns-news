import { Injectable } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, throwError } from 'rxjs';
import User, { Login, RegisterForm} from 'src/interfaces/user';

import { of } from "rxjs"
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  info : BehaviorSubject<any> = new BehaviorSubject(null)

  constructor(private http: HttpClient, private config: ConfigurationService, private router : Router) {
     const userinfo = window.sessionStorage.getItem("userinfo");
     if(userinfo)
      {
          this.info.next(JSON.parse(userinfo))
      }

  }
  public login( form : Login ){
    //return this.http.post(this.config.URLS.LOGIN, form)
    this.http.post(this.config.URLS.LOGIN, form)
      .subscribe((response : any) => {
        this.info.next(response)
        const { accessToken, ...userInfo } = response
        window.sessionStorage.setItem("accessToken", accessToken)
        window.sessionStorage.setItem("userinfo", JSON.stringify(userInfo));
        this.router.navigateByUrl("/");
    })
  }

  public logout(){
    this.info.next(null);
    window.sessionStorage.removeItem("accessToken");
    window.sessionStorage.removeItem("userinfo");
    this.router.navigateByUrl("/");
  }

  public register(form: RegisterForm) {
    return this.http.post(this.config.URLS.REGISTER, form)
  }

  // public user : BehaviorSubject<User> = new BehaviorSubject({ email : "" })

  // user: Observable<User> = from<User[]>([
  //   { email : "abc@def.com" },
  //   { email : "email2@def.com" }
  // ])

  // user: Observable<User> = of<User>({ email : "abc@def.com" })
  // .pipe(map((value)=>{
  //     value.timestamp = new Date()
  //     return value
  // }))
  // .pipe(map((value)=>{
  //   value.email = value.email.toUpperCase();
  //   return value
  // }))

  public user : any = throwError("error happened.")

  public oneSecEvent = interval(1000);
  
  getUsers(city: string, order = "ASC", max = 10) {
    return this.http.get<unknown[]>(this.config.URLS.PUBLIC_USERS)

      .pipe(map((list) => {
        return list.splice(0, max)
      }))

      .pipe(map((list) => {

        if (city.length > 0) {
          return list.filter((person: any) => {
            return person.address.city === city
          })
        }

        return list

      }))
      .pipe(map((list) => {
        return list.sort((a: any, b: any) => {
          const aName = a.name.toUpperCase()
          const bName = b.name.toUpperCase()

          if (order === "ASC") {
            if (aName < bName) {
              return -1
            }
            if (aName > bName) {
              return 1
            }
            return 0
          }
          else {
            if (aName > bName) {
              return -1
            }
            if (aName < bName) {
              return 1
            }
            return 0
          }
        })
      }))
      .pipe(map((list) => {
        list.forEach((person: any) => {
          person.email = person.email.toLowerCase();
        })
        return list;
      }))
  }

}
