import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListArticleComponent } from "../list-article/list-article.component";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
