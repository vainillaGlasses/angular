import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productList: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.productList = [
      {name: 'moca', description: 'choco cafe'},
      {name: 'capu', description: 'cane cafe'},
      {name: 'tico', description: 'negro'}
    ];
  }

}
