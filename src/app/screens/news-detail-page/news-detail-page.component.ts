import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/interfaces/news';

@Component({
  selector: 'sns-news-detail-page',
  templateUrl: './news-detail-page.component.html',
  styleUrls: ['./news-detail-page.component.css']
})
export class NewsDetailPageComponent implements OnInit {

  newsListing : null | Observable<News[]> = null;
  
  constructor(private news: NewsService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { category } = params
      this.newsListing = this.news.getNews(category)
      .pipe(catchError(()=>{
          this.router.navigateByUrl("/notfound");
          return of([])
      }))
    })
  }

}
