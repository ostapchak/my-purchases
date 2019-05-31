import { Component } from '@angular/core';
import { PurchaseService } from './purchase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  navLinks = [
    { path: '/', label: 'Add' },
    { path: '/list', label: 'List' },
    { path:'/reports', label: 'Reports' }
  ];

}
