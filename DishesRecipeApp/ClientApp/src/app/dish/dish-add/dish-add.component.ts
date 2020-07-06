import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from '../shared/dish.service';
import { Dish } from '../shared/dish.model';
import { DishDishCategory } from '../shared/enum/dishDishCategory';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dish-add',
  templateUrl: './dish-add.component.html',
  styleUrls: ['./dish-add.component.css']
})
export class DishAddComponent implements OnInit {

  private dishForm: FormGroup;
  public dishDishCategory = Object.values(DishDishCategory);
  public dish: Dish;
  public id: string;


  constructor(
    private dishService: DishService,
    private location: Location,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }
   

  ngOnInit() {
    this.addDishForm();
    this.getDish();
  }

  addDishForm() {
    this.dishForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      dishCategory: [''],
      dateAdded: [''],
    });
  }

  getDish() {
    var id = parseInt(this.route.snapshot.paramMap.get('id'));

    if (id !== 0) {
      this.dishService.getDish(id)
        .subscribe(result => {
          this.dish = result;

          if (this.getDish !== null) {
            this.dishForm.setValue({
              name: this.dish.name,
              description: this.dish.description,
              dishCategory: this.dish.dishCategory,
              dateAdded: this.dish.dateAdded
            });
          }
        });
    }
  }

  onSubmit({ value, valid }) {
     
    if (valid) {
      var id = parseInt(this.route.snapshot.paramMap.get('id'));

      if (id === 0) {
        this.dishService.add(value)
          .subscribe(
            _ => this.router.navigate(['/dishes']),
            err => {
              const validationErrors = err.error.errors;

              Object.keys(validationErrors).forEach(prop => {
                const formControl = this.dishForm.get(prop.toLowerCase());
                if (formControl) {

                  formControl.setErrors({
                    serverError: validationErrors[prop][0]
                  });
                }
              });
            }
          );
      } else {
        value.id = id;
        this.dishService.update(id, value)
          .subscribe(
            _ => this.router.navigate(['/dishes']),
            err => {
              const validationErrors = err.error.errors;

              Object.keys(validationErrors).forEach(prop => {
                const formControl = this.dishForm.get(prop.toLowerCase());
                if (formControl) {

                  formControl.setErrors({
                    serverError: validationErrors[prop][0]
                  });
                }
              });
            }
          );
      }

    }
  }

  goBack() {
    this.location.back();
  }

}
