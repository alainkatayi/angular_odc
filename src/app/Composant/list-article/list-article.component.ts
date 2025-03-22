import { Component, inject, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../../models/article';
import { NgFor } from '@angular/common';
import { ArticleService } from '../../services/article.service';
import { ApiService } from '../../services/api.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-list-article',
  imports: [ArticleComponent,NgFor],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent implements OnInit {

  //creatiion d'une variable de type article(model), qui son pour l'instant nul(d'ou l'importance du point d'exclamation)
  articles!:Article[];

  //creation d'une variable du type articleservice(l'interface) et qui inject cette derniere, donc elle a maintenant access aux variables et aux methode de ce dernier
  articleService:ArticleService=inject(ArticleService);

  //creation d'une variable data qui attand les informations de l'api laravel
  data:any[] = [];

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void {
    //cette variable prend la valeur de articleservice et utilise conserve les donnes renvoyer par la methode getAll du service
    this.articles=this.articleService.getAll();
    

    //cette variable stocke les donnees renvoyer par la methode getData du apiservice
    this.apiService.getData().subscribe(
      (response)=>{
        this.data = response;
        console.log(this.data)
      },
      (error) =>{
        console.log("erreur",error)
      }
    )
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
