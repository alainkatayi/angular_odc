import { Routes } from '@angular/router';
import { ListArticleComponent } from './Composant/list-article/list-article.component';
import { AppComponent } from './app.component';
import { ArticleComponent } from './Composant/article/article.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './Composant/header/header.component';
import { SingleComponent } from './Composant/single/single.component';
import { LoginComponent } from './Composant/login/login.component';
import { CreateArticleComponent } from './Composant/create-article/create-article.component';


//definition des diffenrentes route
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


    {
        path :'article/:id',
        component:SingleComponent,
        title:'article'
    },

    {
        path :'login',
        component:LoginComponent,
        title:'article'
    },
    {
        path :'create-article',
        component:CreateArticleComponent,
        title:'Create Article'
    },

];
