import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from '../budget';
import { configuration } from '../shared/config';

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

  constructor(private httpClient: HttpClient) {}
  public getAllBudgets(): Observable<Budget[]>{
    return this.httpClient.get<Array<Budget>>(configuration.webApiEndPoint + configuration.urls.query.apiBudgetsUrl);
  }
  public addNewBudget(newBudget: Budget):  Observable<Budget>{
    return this.httpClient.post<Budget>(configuration.webApiEndPoint + configuration.urls.query.apiBudgetsUrl,newBudget);
  }
  public get(id: number): Observable<Budget> {
    return this.httpClient.get<Budget>(configuration.webApiEndPoint + configuration.urls.query.apiBudgetsUrl + `/${id}`);
  }
  public update(id: number, modifiedBudget: Budget): Observable<Budget> {
    return this.httpClient.post<Budget>(configuration.webApiEndPoint + configuration.urls.query.apiBudgetsUrl + `/${id}`, modifiedBudget);
  }
}
