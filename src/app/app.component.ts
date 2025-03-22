import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './Composant/article/article.component';
import { ListArticleComponent } from './Composant/list-article/list-article.component';
import { HeaderComponent } from './Composant/header/header.component';
import { ArticleApiComponent } from './Composant/article-api/article-api.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ListArticleComponent,ArticleApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //definition du titre de notre application
  title = 'blog';
}
