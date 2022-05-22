import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Budget } from 'src/app/budget';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent{

  constructor(private budgetService: BudgetService, private router: Router) { }

  public onSaveBudget(budget: Budget): void{
    this.budgetService.add(budget).subscribe(() => {
      this.router.navigate(['/budgets']);
    });
  }
}
