import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'power-input-app';
  loginActive=true;

  setLoginActive(loginActive){
    this.loginActive= loginActive;
  }
}
