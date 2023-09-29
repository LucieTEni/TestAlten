import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAdminComponent } from './product/products-admin/products-admin.component';
import { ProductsComponent } from './product/products/products.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'products'},
  {path: 'admin/products', component: ProductsAdminComponent, title: 'Admin'},
  {path: 'products', component: ProductsComponent, title: 'Products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule {}
