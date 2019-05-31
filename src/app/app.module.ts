import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPurchasePageComponent } from './add-purchase-page/add-purchase-page.component';
import { ListPurchasesPageComponent } from './list-purchases-page/list-purchases-page.component';
import {PurchaseService} from './purchase.service';
import { ReportsPurchasesComponent } from './reports-purchases/reports-purchases.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPurchasePageComponent,
    ListPurchasesPageComponent,
    ReportsPurchasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule
  ],
  providers: [PurchaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
