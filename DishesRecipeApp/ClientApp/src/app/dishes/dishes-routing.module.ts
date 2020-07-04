import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishComponent } from './dish.component';

const routes: Routes = [
  {
    path: '', component: DishComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      //{ path: 'list', component: EmployeesListComponent },
      //{ path: 'edit/:id', component: EmployeesEditComponent },
      //{ path: 'edit', component: EmployeesEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DishRoutingModule {
  static routedComponents = [DishComponent, /*EmployeesListComponent, EmployeesEditComponent*/];
}
