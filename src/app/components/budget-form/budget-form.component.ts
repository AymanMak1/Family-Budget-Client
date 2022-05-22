import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Budget } from 'src/app/budget';

@Component({
  selector: 'budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit, OnChanges {
  @Input() budget: Budget | undefined;
  @Output() saveBudget: EventEmitter<Budget> = new EventEmitter<Budget>();

  public budgetForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.budgetForm = this.formBuilder.group({
      id: [this.budget?.id],
      title: [this.budget?.title, [Validators.required,Validators.minLength]],
      amount:  [this.budget?.amount,[Validators.required]],
      category:  [this.budget?.category,[Validators.required]],
    })
  }

  public ngOnChanges(): void {
      this.budgetForm = this.formBuilder.group({
      id: [this.budget?.id],
      title: [this.budget?.title, [Validators.required,Validators.minLength]],
      amount:  [this.budget?.amount,[Validators.required]],
      category:  [this.budget?.category,[Validators.required]],
    })
  }
  public onSubmit(){
      this.saveBudget.emit(this.budgetForm.value);
  }

  public isInvalidAndTouchedOrDirty(name: string) {
    return !this.budgetForm.get(name)?.valid && (this.budgetForm.get(name)?.touched || this.budgetForm.get(name)?.dirty);
  }
  public isValid(name: string){
    return this.budgetForm.get(name)?.valid
  }

}
