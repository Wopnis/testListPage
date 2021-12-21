import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListPageComponent } from './components/layout/list-page/list-page.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { IncomeComponent } from './components/layout/pages/income/income.component';
import { OutcomeComponent } from './components/layout/pages/outcome/outcome.component';
import { LoansComponent } from './components/layout/pages/loans/loans.component';
import { InvestmentComponent } from './components/layout/pages/investment/investment.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    NavigationComponent,
    IncomeComponent,
    OutcomeComponent,
    LoansComponent,
    InvestmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
