import { Component } from '@angular/core';

@Component({
  selector: 'sns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle : boolean = true;
  people = [];
  userMessage : string = "";
  title = 'SnsNews';
  toggleLifecycleComponent(){
    this.toggle = !this.toggle
  }
  childToParentEvent(event : string){
    console.log(event, "childToParentEvent")
  }
}
