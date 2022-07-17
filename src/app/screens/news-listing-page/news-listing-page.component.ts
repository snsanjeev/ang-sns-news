import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/interfaces/news';

@Component({
  selector: 'sns-news-listing-page',
  templateUrl: './news-listing-page.component.html',
  styleUrls: ['./news-listing-page.component.css']
})
export class NewsListingPageComponent implements OnInit {

  newsListing : null | Observable<News[]> = null

  constructor(private news : NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { category } = params
      this.newsListing = this.news.getNews(category)
    })
  }

}
