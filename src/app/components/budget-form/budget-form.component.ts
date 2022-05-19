import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addBudget(){
    console.log("Hello");
  }

}
