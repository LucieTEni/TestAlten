import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ProductModule { }
