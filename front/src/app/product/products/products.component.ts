import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { SearchParams } from 'app/shared/ui/list/search.model';
import { SelectItem } from 'primeng/api';
import { map } from 'rxjs';

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
  public sortKeyTitle = "name-stock-rating-price";
  public listKey = "sortBy";
  public sortOptions:SelectItem[] = [
    {label: 'Name', value: 'name'},
    {label: 'Price', value: 'price'},
    {label: 'Stock', value: 'inventoryStatus'},
    {label: 'Rating', value: 'rating'}
  ];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.data = this.productsService.getProducts();
  }

  getElements(event: SearchParams): void {
    this.data = this.productsService.getProducts();
    if (event.search === '') {
      return;
    }

    var search: string = event.search.trim().replace(/\s/g, '').toUpperCase();
    var sortOrder = event.sortOrder;

    this.data = this.data.filter(product => {
      let productOrder: any = product[sortOrder];

      if(sortOrder === 'price' || sortOrder ==='rating') {
        return productOrder === Number(search);
      } 
      
      if(sortOrder === 'inventoryStatus' || sortOrder === 'name')  {
        return (productOrder.toUpperCase()).includes(search) === true;
      }
    });
  }
}
