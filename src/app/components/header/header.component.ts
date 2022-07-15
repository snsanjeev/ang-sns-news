import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public applicationName = "SNS News"

  constructor() { }

  ngOnInit(): void {
  }

}
