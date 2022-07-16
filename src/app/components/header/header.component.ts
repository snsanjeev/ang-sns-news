import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import User from 'src/interfaces/user';

@Component({
  selector: 'sns-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public applicationName = "SNS News"
  public userEmail = ""

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.user.subscribe((response)=>{
      this.userEmail = response.email
    })
  }

}
