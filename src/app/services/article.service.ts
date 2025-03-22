//service article pour rendre tout les article creer accessible partout dans l'application

import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  //definition d'une variable de type article, article qui est le model de notre application

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
      {
        id:2,
        title:'Mon deuxieme article',
      content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio nec nunc ultricies ultricies. Nulla facilisi. Sed nec nunc nec eros',
        auteur :'Jean Dupont',
        photo :'https://picsum.photos/200/300',
        created_at : new Date(),
        nb_comment : 0,
        categorie :['Angular','Javascript','Typescript'],
      },
      {
        id:3,
        title:'Mon troisieme  article',
      content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio nec nunc ultricies ultricies. Nulla facilisi. Sed nec nunc nec eros',
        auteur :'Jean Dupont',
        photo :'https://picsum.photos/200/300',
        created_at : new Date(),
        nb_comment : 0,
        categorie :['Angular','Javascript','Typescript'],
      },
  ];


  //methode qui renvoi renvoi tous les contenus de la variable articles
  getAll(){
    return this.articles
  }

  //methode qui renvoi un seul  article selon son id
  getOne(id:number){
    const arti = this.articles.find((article)=>article.id===id)
    return arti;
  }

  //aucune importnace
  findAll():Promise<Article[]>{
    let data = fetch('http://127.0.0.1:8000/api/publications').then(response => response.json())
    return data
  }



}
