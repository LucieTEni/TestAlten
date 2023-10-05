import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category, Product } from '../product.model';
import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { ControlType } from 'app/shared/utils/crud-item-options/control-type.model';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  public products: Product[] = [];
  public productsCRUD: CrudItemOptions[] = [];
  public productModel = Product;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.getCRUDItemOptions();
  }

  getCRUDItemOptions(): void {
    this.productsCRUD = [
      {
        label: 'Code',
        key: 'code',
        value: 'code',
        columnOptions: {
          default: true,
        },
        controlType: ControlType.INPUT,
        type: 'number'
      },
      {
        label: 'Name',
        key: 'name',
        value: 'name',
        columnOptions: {
          default: true,
        },
        controlType: ControlType.INPUT,
        type: 'text',
      },
      {
        label: 'Category',
        key: 'category',
        value: 'category',
        columnOptions: {
          default: false,
        },
        controlType: ControlType.SELECT,
        options: [
          {value: Category.ACCESSORIES, label: Category.ACCESSORIES},
          {value: Category.CLOTHING, label: Category.CLOTHING},
          {value: Category.ELECTRONICS, label: Category.ELECTRONICS},
          {value: Category.FITNESS, label: Category.FITNESS},
        ],
      },
      {
        label: 'Description',
        key: 'description',
        value: 'description',
        columnOptions: {
          default: false,
        },
        controlType: ControlType.INPUT,
        type: 'text'
      },
      {
        label: 'Price',
        key: 'price',
        value: 'price',
        columnOptions: {
          default: false,
        },
        controlType: ControlType.INPUT,
        type: 'number'
      }
    ];
  }

  saved(product: Product): void {
    console.log(product);
  }

  deleted(ids: number[]): void {
    this.products = this.products.filter(product => !ids.includes(product.id));
  }

}
