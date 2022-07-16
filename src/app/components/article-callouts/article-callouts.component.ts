import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalloutsService } from 'src/app/services/callouts.service';
import { Article } from 'src/interfaces/article';

@Component({
  selector: 'sns-article-callouts',
  templateUrl: './article-callouts.component.html',
  styleUrls: ['./article-callouts.component.css']
})
export class ArticleCalloutsComponent implements OnInit {

  public news : Article[] = this.callouts.topNews;
  constructor(private callouts: CalloutsService) { }

  ngOnInit(): void {


  }

}
