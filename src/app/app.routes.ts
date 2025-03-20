import { Routes } from '@angular/router';
import { ListArticleComponent } from './Composant/list-article/list-article.component';
import { AppComponent } from './app.component';
import { ArticleComponent } from './Composant/article/article.component';

export const routes: Routes = [
    {
        path :'',
        component:AppComponent,
        title:'article'
    },
    {
        path :'about',
        component:ArticleComponent,
        title:'article'
    },

];
