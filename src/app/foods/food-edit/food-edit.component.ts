import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FoodService} from '../food.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrManager} from 'ng6-toastr-notifications';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {

  foodForm: FormGroup;
  id: string;
  foodName: string;
  foodDescription: string;
  foodUnitPrice: string;
  numberofFood: number;

  constructor(private formBuiler: FormBuilder,
              private foodService: FoodService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrManager) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  ngOnInit() {
    this.foodForm = this.formBuiler.group({
      foodName: ['', Validators.required],
      foodDescription: ['', Validators.required],
      foodUnitPrice: ['', Validators.required],
      numberofFood: ['', Validators.required]
    });

  }

  getData(): void {
    this.foodService.getFood(this.id).subscribe(
      data => {
        this.foodName = data.foodName;
        this.foodDescription = data.foodDescription;
        this.foodUnitPrice = data.foodUnitPrice;
        this.numberofFood = data.numberofFood;
      }
    );
  }

  updateFood(): void {
    const food = this.foodForm.value;
    food.foodId = this.id;
    this.foodService.updateFood(this.id, food).subscribe(
      data => {
        this.toastr.successToastr('Food ' + food.foodName + ' added!.', 'Success!');
        console.log(data);
      }
    );
    this.router.navigate(['foods']);
  }

}
