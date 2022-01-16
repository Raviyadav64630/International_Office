import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thd-io-frontend';
  siteLanguage: string = 'English';

  ngOnInit(): void {
  }

}

