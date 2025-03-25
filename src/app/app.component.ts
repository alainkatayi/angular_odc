import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './Composant/article/article.component';
import { ListArticleComponent } from './Composant/list-article/list-article.component';
import { HeaderComponent } from './Composant/header/header.component';
import { ArticleApiComponent } from './Composant/article-api/article-api.component';
import { LoginComponent } from './Composant/login/login.component';
import { FormsModule } from '@angular/forms';
import { CreateArticleComponent } from './Composant/create-article/create-article.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ListArticleComponent,ArticleApiComponent, LoginComponent, FormsModule, CreateArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //definition du titre de notre application
  title = 'blog';
}
