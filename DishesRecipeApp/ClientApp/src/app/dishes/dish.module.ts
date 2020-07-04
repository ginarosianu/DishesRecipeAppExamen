
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { CoreModule } from '../core/core.module';
//import { AngularMaterialModule } from '../shared/angular-material.module';

import { DishRoutingModule } from './dishes-routing.module';

import { DishService } from './dish.service';


@NgModule({
  declarations: [DishRoutingModule.routedComponents],
  imports: [
    CommonModule,
    DishRoutingModule,
    //AngularMaterialModule,
    //CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DishService],
})
export class DishModule { }

