import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
import {trigger, transition, style, animate, query, stagger, keyframes} from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class ProductsComponent implements OnInit {

  count: number;
  constructor(private router: Router, private _service: UtilityService) { }

  ngOnInit() {
    this._service.cartCount.subscribe(res => {
      this.count = res;
    })
  }
  
  productHome() {
    this.router.navigate(['product/12']);
    this._service.backEnable.next({url: 'products', text: 'Back to Products'});
  }

  addToCart(event) {
    event.stopPropagation();
    this.count = this.count + 1;
    this._service.cartCount.next(this.count);
  }

}
