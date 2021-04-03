import { Component } from '@angular/core';
import { NewsService } from './components/services/news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';

  constructor(
    private newsService : NewsService
  ){}

  ngOnInit(): void {
    this.newsService.getRepos().then(console.log);
  }
}
