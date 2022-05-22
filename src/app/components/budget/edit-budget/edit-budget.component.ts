import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from 'src/app/budget';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
  styleUrls: ['./edit-budget.component.css']
})
export class EditBudgetComponent implements OnInit {
  public budget: Budget | undefined;
  constructor(
    private budgetService: BudgetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.budgetService.get(id).subscribe((data: Budget) => {
      this.budget = data;
    });
  }

  public onSaveBudget(budget: Budget): void{
    this.budgetService.update(budget.id, budget).subscribe(() => {
      this.router.navigate(['/budgets']);
    });
  }

}
