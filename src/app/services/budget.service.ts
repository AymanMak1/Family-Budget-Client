import { Injectable } from '@angular/core';
import { Budget } from '../budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private budgets: Array<Budget> = [
    {
      id:1,
      title:'2k22 Summer Budget',
      amount:30000,
      category:'Vaccations'
    },
    {
      id:2,
      title:'Aid Al adha 2k22',
      amount:6990,
      category:'Occasions'
    },
    {
      id:3,
      title:'2k23 Spring',
      amount:12000,
      category:'Holidays'
    }
  ];
  constructor() {

  }

  getAll(): Array<Budget>{
    return this.budgets;
  }
}
