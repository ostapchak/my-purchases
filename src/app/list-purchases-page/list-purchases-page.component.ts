import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-list-purchases-page',
  templateUrl: './list-purchases-page.component.html',
  styleUrls: ['./list-purchases-page.component.css']
})
export class ListPurchasesPageComponent implements OnInit {

  constructor(private service: PurchaseService) { }

  form: FormGroup;
  
  purchases = [];

  ngOnInit() {
    this.form = new FormGroup({
    deletingDate : new FormControl('',Validators.required)
   });
    this.purchases = this.service.purchases;
    this.purchases.sort((val1, val2)=> {return val1.date > val2.date ? -1 : val1.date < val2.date ? 1 : 0;}); //list sorting by date
  }

  deleteByDate(){
    this.service.deleteByDate(this.form.value.deletingDate);
    this.purchases = this.service.purchases;
  }
}
