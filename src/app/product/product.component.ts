import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private _service: UtilityService) { }

  ngOnInit() {

  }


  ngOnDestroy() {
    this._service.backEnable.next({url: '', text: ''});
  }
}
