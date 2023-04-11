import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';
  sideMenuOpened : boolean = false;
  sideMenu(): void{
    this.sideMenuOpened = !this.sideMenuOpened;
  }
}
