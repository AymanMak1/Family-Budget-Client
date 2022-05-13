import { NgModule } from '@angular/core';
import { ListBudgetsComponent } from '../components/budget/list-budgets/list-budgets.component';
import { AddBudgetComponent } from '../components/budget/add-budget/add-budget.component';
import { EditBudgetComponent } from '../components/budget/edit-budget/edit-budget.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { AboutComponent } from '../components/about/about.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'budgets',
    component: ListBudgetsComponent,
  },
  {
    path: 'budgets/new',
    component: AddBudgetComponent,
  },
  {
    path: 'budgets/:id/edit',
    component: EditBudgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
