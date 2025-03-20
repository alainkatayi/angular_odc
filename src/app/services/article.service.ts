import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles:Article[]=[
    
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
  ];

  getAll(){
    return this.articles
  }
  getOne(id:number){
    const arti = this.articles.find((article)=>article.id===id)
    return arti;
  }


}
