import { Component, inject, Input } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-api',
  imports: [NgFor,ArticleApiComponent,RouterLink],
  templateUrl: './article-api.component.html',
  styleUrl: './article-api.component.css'
})
export class ArticleApiComponent {
@Input() article!:Article;  

  service:ArticleService =inject(ArticleService)
  articles!:Article[]

  ngOnInit(){
    this.articles=this.service.getAll();
   
    
  }

}
