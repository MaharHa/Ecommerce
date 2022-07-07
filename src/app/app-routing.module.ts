import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'products', component: ProductsComponent},
    { path: 'cards', component: CardsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
