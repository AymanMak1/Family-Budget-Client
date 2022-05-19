import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/budget';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-budgets',
  templateUrl: './list-budgets.component.html',
  styleUrls: ['./list-budgets.component.css']
})
export class ListBudgetsComponent {

  public budgets: Array<Budget>;

  constructor(private budgetService: BudgetService) {
    this.budgets = budgetService.getAll();
  }

}
