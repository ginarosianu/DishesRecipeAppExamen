import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { DishComponent } from './dish/dish.component';
import { DishAddComponent } from './dish/dish-add/dish-add.component';
import { DishDetailsComponent } from './dish/dish-details/dish-details.component';
import { ReviewComponent } from './review/review.component';
//import { IngredientComponent } from './ingredient/ingredient.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    DishComponent,
    DishAddComponent,
    DishDetailsComponent,
    ReviewComponent,
    //IngredientComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'dish', component: DishComponent },
      { path: 'dish-add/:id', component: DishAddComponent },
      { path: 'dish/:dishId', component: DishDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
