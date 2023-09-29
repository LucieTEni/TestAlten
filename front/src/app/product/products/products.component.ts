import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() public lang = 'en';
  public yourDataArray = [];
  public data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
