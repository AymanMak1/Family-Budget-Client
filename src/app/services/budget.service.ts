import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from '../budget';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private httpClient: HttpClient) {

  }

  public getAll(): Observable<Budget[]>{
    return this.httpClient.get<Array<Budget>>('http://127.0.0.1:8000/api/budgets');
  }

  public add(newBudget: Budget):  Observable<Budget>{
    return this.httpClient.post<Budget>('http://127.0.0.1:8000/api/budgets',newBudget);
  }
}
