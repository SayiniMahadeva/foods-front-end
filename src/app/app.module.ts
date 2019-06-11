import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ng6-toastr-notifications';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { FoodListComponent } from './foods/food-list/food-list.component';
import { FoodAddComponent } from './foods/food-add/food-add.component';
import { FoodEditComponent } from './foods/food-edit/food-edit.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FoodDetailComponent } from './foods/food-detail/food-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodAddComponent,
    FoodEditComponent,
    WelcomePageComponent,
    FoodDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
