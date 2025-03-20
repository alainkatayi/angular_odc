import { Routes } from '@angular/router';
import { ListArticleComponent } from './Composant/list-article/list-article.component';
import { AppComponent } from './app.component';
import { ArticleComponent } from './Composant/article/article.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './Composant/header/header.component';


export const routes: Routes = [
    {
        path :'',
        component:ListArticleComponent,
        title:'article'
    },
    {
        path :'categories',
        component:CategoriesComponent,
        title:'article'
    },

];
