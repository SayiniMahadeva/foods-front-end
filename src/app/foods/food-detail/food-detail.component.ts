import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import {ActivatedRoute, Router} from '@angular/router';
import {FoodService} from '../food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  pageTitle = 'Food Detail';
  errorMessage = '';
  food: Food;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private foodService: FoodService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getFood(id);
    }
  }

  getFood(id: string) {
    this.foodService.getFood(id).subscribe(
      food => this.food = food,
      error => this.errorMessage = error);
  }

  onBack(): void {
    this.router.navigate(['/foods']);
  }

}
