import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { IngredientType } from '../shared/enums/ingredientTypes.enum';
import { Origin } from '../shared/enums/origin.enum';
import { IngredientService } from '../shared/ingredient.service';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})

export class IngredientAddComponent implements OnInit {
  private ingredientForm: FormGroup;
  public ingredientTypes = Object.values(IngredientType);
  public origin = Object.values(Origin);
  public ingredient: Ingredient;


  constructor(
    private ingredientService: IngredientService,
    private location: Location,
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.addIngredientForm();
    this.getIngredient();
  }

  addIngredientForm() {
    this.ingredientForm = this.fb.group({
      name: ['', Validators.required],
      
    });
  }

  getIngredient() {
    var ingredientId = parseInt(this.route.snapshot.paramMap.get('cid'));

    if (ingredientId !== 0) {
      this.ingredientService.getIngredient(ingredientId)
        .subscribe(result => {
          this.ingredient = result;

          if (this.ingredient !== null) {
            this.ingredientForm.setValue({
              name: this.ingredient.name
            });
          }
        });
    }
  }

  //getComment() {
  //  var commentId = parseInt(this.route.snapshot.paramMap.get('cid'));

  //  if (commentId !== 0) {
  //    this.commentService.getComment(commentId)
  //      .subscribe(result => {
  //        this.comment = result;

  //        if (this.comment !== null) {
  //          this.commentForm.setValue({
  //            text: this.comment.text,
  //            important: this.comment.important
  //          });
  //        }
  //      });
  //  }
  //}


  onSubmit({ value, valid }) {

    console.log("in submit ingredient");
    console.log(value);
    console.log(valid);

    if (valid) {
      var dishId = parseInt(this.route.snapshot.paramMap.get('eid'));
      var ingredientId = parseInt(this.route.snapshot.paramMap.get('cid'));

      console.log("in submit");
      console.log(ingredientId);

      if (ingredientId === 0) {

        value.dishId = dishId;
        //value.important = value.important == 'true' ? true : false;
        console.log("in if");
        console.log(value);

        this.ingredientService.add(value)
          .subscribe(
            _ => this.location.back(),
            err => {
              const validationErrors = err.error.errors;

              Object.keys(validationErrors).forEach(prop => {
                const formControl = this.ingredientForm.get(prop.toLowerCase());
                if (formControl) {

                  formControl.setErrors({
                    serverError: validationErrors[prop][0]
                  });
                }
              });
            }
          );
      } else {
        value.id = ingredientId;
        //value.important = value.important == 'true' ? true : false;
        value.dishId = dishId;

        this.ingredientService.update(value.id, value)
          .subscribe(
            _ => this.location.back(),
            err => {
              const validationErrors = err.error.errors;

              Object.keys(validationErrors).forEach(prop => {
                const formControl = this.ingredientForm.get(prop.toLowerCase());
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
