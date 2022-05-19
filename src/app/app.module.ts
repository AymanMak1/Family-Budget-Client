import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './components/app/app.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ListBudgetsComponent } from './components/budget/list-budgets/list-budgets.component';
import { EditBudgetComponent } from './components/budget/edit-budget/edit-budget.component';
import { AddBudgetComponent } from './components/budget/add-budget/add-budget.component';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ListBudgetsComponent,
    EditBudgetComponent,
    AddBudgetComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
