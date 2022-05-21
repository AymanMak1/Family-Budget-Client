import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Budget } from 'src/app/budget';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {
  @Input() budget: Budget | undefined;
  public budgetForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.budgetForm = this.formBuilder.group({
      title: [this.budget?.title, [Validators.required,Validators.minLength]],
      amount:  [this.budget?.amount,[Validators.required]],
      category:  [this.budget?.category,[Validators.required]],
    })
  }

  public onSubmit(e: any){
    e.preventDefault();
    console.log(this.budgetForm);
  }
  public isInvalidAndTouchedOrDirty(name: string) {
    return !this.budgetForm.get(name)?.valid && (this.budgetForm.get(name)?.touched || this.budgetForm.get(name)?.dirty);
  }
  public isValid(name: string){
    return this.budgetForm.get(name)?.valid
  }
  /*saveBudget(){
    this.budgetService.addNewBudget(this.budget).subscribe((data) => {
      this.router.navigate(['/budgets']);
    });
  }*/

}
