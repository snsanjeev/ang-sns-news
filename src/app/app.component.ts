import { Component } from '@angular/core';

@Component({
  selector: 'sns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle : boolean = true;
  title = 'SnsNews';
  toggleLifecycleComponent(){
    this.toggle = !this.toggle
  }
}
