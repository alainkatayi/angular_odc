import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-single',
  imports: [RouterLink],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  route:ActivatedRoute = inject(ActivatedRoute)
  article!:Article|undefined;
  articleService:ArticleService=inject(ArticleService);
  articleId = -1;
  

  ngOnInit() {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.articleService.getOne(this.articleId);
  }
}
