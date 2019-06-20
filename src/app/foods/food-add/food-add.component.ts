import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FoodService} from '../food.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrManager} from 'ng6-toastr-notifications';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {
  foodForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private foodService: FoodService,
              private router: Router,
              public toastr: ToastrManager
  ) { }

  ngOnInit() {
    this.foodForm = this.formBuilder.group({
      foodName: ['', Validators.required],
      foodDescription: ['', Validators.required],
      foodUnitPrice: ['', Validators.required],
      numberofFood: ['', Validators.required]
    });
  }

  saveFood(): void {
    const food = this.foodForm.value;
    food.foodId = '001';
    this.foodService.saveFood(food).subscribe(
      response => {
        if (response.status === 200) {
          console.log('Success');
          this.toastr.successToastr('Food ' + food.foodName + ' added!.', 'Success!');
          this.router.navigate(['foods']);
        }
      },
      error => {
        console.error(error);
      }
    );
  }


}
