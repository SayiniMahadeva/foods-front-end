import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FoodListComponent} from './foods/food-list/food-list.component';
import {FoodAddComponent} from './foods/food-add/food-add.component';
import {FoodEditComponent} from './foods/food-edit/food-edit.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {FoodDetailComponent} from './foods/food-detail/food-detail.component';

const routes: Routes = [
  {
    path: 'food/create',
    component: FoodAddComponent
  },
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
  {
    path: 'foods',
    component: FoodListComponent
  },
  {
    path: 'foods/:id',
    component: FoodDetailComponent
  },
  {
    path: 'foods/edit/:id',
    component: FoodEditComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
