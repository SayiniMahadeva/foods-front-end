import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import {FoodService} from '../food.service';
import {ToastrManager} from 'ng6-toastr-notifications';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  pageTitle = 'Food - List';
  foods: Food[];
  filteredFoods: Food[];
  popoverTitle = 'Delete';
  popoverMessage = 'Are sure want delete this?';
  cancelClicked = false;

  // tslint:disable-next-line:variable-name
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredFoods = this.listFilter ? this.performFilter(this.listFilter) : this.foods;
  }


  constructor(private foodService: FoodService,
              public toastr: ToastrManager
  ) {
    this.filteredFoods = this.foods;
    this.listFilter = '';
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.foodService.getFoodsList()
      .subscribe(
        data => {
          this.foods = data;
          this.filteredFoods = this.foods;
          console.log(data);
        },
        error => console.log(error));
  }

  deleteFood(id: string): void {
    this.foodService.deleteFood(id).subscribe(
      () => {
        console.log('success');
        this.toastr.successToastr('Food deleted!.', 'Success!');
        this.getData();
      }
    );
  }

  performFilter(filterBy: string): Food[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.foods.filter((food: Food) =>
      (food.foodName.toLocaleLowerCase().indexOf(filterBy) !== -1) ||
        (food.foodDescription.toLocaleLowerCase().indexOf(filterBy) !== -1));
  }

}
