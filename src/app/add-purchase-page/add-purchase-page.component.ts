import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-add-purchase-page',
  templateUrl: './add-purchase-page.component.html',
  styleUrls: ['./add-purchase-page.component.css']
})
export class AddPurchasePageComponent implements OnInit {

   form: FormGroup;

   constructor(private service: PurchaseService) {}
    
   ngOnInit() {
     this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        price: new FormControl('',[Validators.required, this.checkForNumber]), 
        currency: new FormControl('UAH'),
        date: new FormControl(new Date(),Validators.required)
     });
   }

   checkForNumber(control: FormControl){
     if(isNaN(control.value)){
       return{
         'Error':true
       };
     }
     return null;
   }

   addPurchase() {
      this.service.addPurchase(this.form.value);
      console.log(this.form);
      this.form.reset({currency:"UAH", date: new Date()})
  }
  
}
