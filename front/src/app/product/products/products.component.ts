import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  @ViewChild('templateGridProduct', {static: true}) templateGridProduct: TemplateRef<any>;
  @ViewChild('templateListProduct', {static: true}) templateListProduct: TemplateRef<any>;
  @Input() public lang = 'en';
  public data: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.data = this.productsService.getProducts();
    console.log(this.data);
  }
}
