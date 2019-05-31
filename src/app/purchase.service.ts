import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PurchaseService {

  constructor(private http: HttpClient) {}

  purchases = [
    { name: "Apple", price: 2, currency: "USD", date: new Date(2019, 4, 12) },
    { name: "Meat", price: 120, currency: "UAH", date: new Date(2011, 4, 1) },
    { name: "Shugar", price: 15, currency: "UAH", date: new Date(2019, 4, 25) },
    { name: "Oil", price: 5, currency: "EUR", date: new Date(2019, 4, 12) }
  ];
  reports= [];
  currencys=[];

  addPurchase(data) {
    this.purchases.push(data);
    console.log(this.purchases)
  }

  deleteByDate(date){
    this.purchases = this.purchases.filter((item)=>{
      return item.date.toLocaleDateString()!==date.toLocaleDateString();
    })
  }
  
  getCurrencys(){
    this.http.get('http://data.fixer.io/api/latest?access_key=15710e5b5da842ee59399d8259eb2d09&base=eur&symbols=USD,UAH')
    .subscribe((response:any)=>{
      this.currencys=[
        {EUR:1, USD:response.rates.USD, UAH:1/response.rates.UAH},
        {USD:1, EUR:1-(response.rates.USD-1), UAH:1/((1-(response.rates.USD-1))*response.rates.UAH)},
        {UAH:1, EUR:response.rates.UAH, USD:(1-(response.rates.USD-1))*response.rates.UAH}
      ];
      console.log(this.currencys)
    });
  }

  createReport(dataReport) {
    this.reports.push(dataReport);
  }
}
