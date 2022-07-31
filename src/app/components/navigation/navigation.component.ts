import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { navigation } from "../../../environments/environment";
//import { navigation } from "../../../environments/environment"

@Component({
  selector: 'sns-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  info : any;
  public navigation = navigation

  constructor(private user : UserService) { }

  ngOnInit(): void {
    this.user.info.subscribe((info)=>{
      this.info = info;
    })
  }

  logout() {
    this.user.logout();
  }

}
