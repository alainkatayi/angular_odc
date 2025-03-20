import { Component, inject, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../../models/article';
import { NgFor } from '@angular/common';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-list-article',
  imports: [ArticleComponent,NgFor],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent implements OnInit {

  articles!:Article[];
  articleService:ArticleService=inject(ArticleService);

  ngOnInit(): void {
    this.articles=this.articleService.getAll();
  }


    /*ngOnInit() {
      this.articles=[
      {
        id:1,
        title:'Mon premier article',
      content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio nec nunc ultricies ultricies. Nulla facilisi. Sed nec nunc nec eros',
        auteur :'Jean Dupont',
        photo :'https://picsum.photos/200/300',
        created_at : new Date(),
        nb_comment : 0,
        categorie :['Angular','Javascript','Typescript'],
      },
      {
  
        id:2,
      title:'Mon premier article',
      content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio nec nunc ultricies ultricies. Nulla facilisi. Sed nec nunc nec eros',
        auteur :'Jean Dupont',
        photo :'https://picsum.photos/200/300',
        created_at : new Date(),
        nb_comment : 0,
        categorie :['Angular','Javascript','Typescript'],
      },
    ];
  
    }*/


}
