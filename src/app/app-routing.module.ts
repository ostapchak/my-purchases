import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPurchasePageComponent } from './add-purchase-page/add-purchase-page.component';
import { ListPurchasesPageComponent } from './list-purchases-page/list-purchases-page.component';
import { ReportsPurchasesComponent } from './reports-purchases/reports-purchases.component';

const routes: Routes = [
  { path: 'list', component: ListPurchasesPageComponent },
  {path: 'reports', component: ReportsPurchasesComponent},
  { path: '', component:  AddPurchasePageComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
