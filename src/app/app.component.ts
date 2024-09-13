import { Component, OnInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserListComponent, HomeComponent],
})
export class AppComponent implements OnInit {
  title = 'linting-formatting-practice';

  constructor() {}

  ngOnInit() {
    const x = 10;
    if (x == 10) {
      this.HandleDisplay();
    }
  }

  public doSomething() {
    const y = 20;
    return y;
  }

  public HandleDisplay() {}
}
