import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  //public overall: any;
  public overallIncome: number | undefined;
  public overallOutcome: number | undefined;

  constructor(private budgetService: BudgetService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.budgetService.getOverallIncomeAndOutcome().subscribe((data: any)=>{
      //this.overall = data;
      this.overallIncome= data['income'];
      this.overallOutcome= data['outcome'];
    })
  }

}
