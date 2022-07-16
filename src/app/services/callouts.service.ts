import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { Article } from 'src/interfaces/article';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class CalloutsService {

  constructor(private http: HttpClient, private config: ConfigurationService) { }


  public getCallouts(rows: number = 4){
    // return this.topNews.splice(0, rows)
    return this.http.get<Article[]>(this.config.URLS.TOPNEWS)
  }
}
