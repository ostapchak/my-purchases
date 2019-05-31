import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-reports-purchases',
  templateUrl: './reports-purchases.component.html',
  styleUrls: ['./reports-purchases.component.css']
})
export class ReportsPurchasesComponent implements OnInit  {

  reports=[];
  currentByYear= [];
  currentByCurrency: any;
  report=0;

  form: FormGroup;

  constructor(private service: PurchaseService) {}
  
  ngOnInit()  {
    this.form = new FormGroup({
      year: new FormControl('2019',[Validators.required, this.checkForLength, this.checkForNumber]),
      currency: new FormControl('UAH')
   });
   this.service.getCurrencys()
  }

  checkForLength(control: FormControl){
    if(control.value.length!=4){
      return{
        'Error':true
      };
    }
    return null;
  }

  checkForNumber(control: FormControl){
    if(isNaN(control.value)){
      return{
        'Error':true
      };
    }
    return null;
  }

  createReport() {
    this.currentByYear=this.service.purchases.filter((item)=>{
      return item.date.getFullYear()==this.form.value.year  
    })

    for(var i=0; i<this.service.currencys.length; i++){
      for(var key in this.service.currencys[i]){
          if(key==this.form.value.currency&&this.service.currencys[i][key]==1){
            this.currentByCurrency=this.service.currencys[i]
          }
      }
    }

    this.currentByYear.map(item=>{
          if(item.currency=="USD"){
               this.report+=item.price*this.currentByCurrency.USD
            }
            else{
              if(item.currency=="UAH"){
                this.report+=item.price*this.currentByCurrency.UAH
                }
                else{
                  if(item.currency=="EUR"){
                    this.report+=item.price*this.currentByCurrency.EUR
                     }
                }
            }
            return this.report
    })
        
    this.reports.push({year: this.form.value.year, fullPrice: this.report, currency: this.form.value.currency})
    this.service.createReport(this.reports);
    this.report=0;
  }
}
