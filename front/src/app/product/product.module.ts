import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsService } from './products.service';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsAdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [ProductsService]
  
})
export class ProductModule { }
