import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  imports: [NgIf, FormsModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css',
  standalone: true, // ✅ Standalone componentimports: [],
})
export class CreateArticleComponent {
  title = '';
  content = '';
  slug = '';
  auteur = '';

  constructor(private articleService: ArticleService) {}

  submitArticle() {
    this.articleService.createArticle({
      title: this.title,
      content: this.content,
      slug: this.slug,
      auteur: this.auteur
    })
      .subscribe(response => {
        console.log('Article créé', response);
      }, error => {
        console.error('Erreur de création', error);
      });
  }
}
