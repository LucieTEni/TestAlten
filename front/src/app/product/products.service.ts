import { Injectable } from "@angular/core";
import products from '../../assets/products.json';
import { Product } from "./product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private products = [];
    
    constructor() {
        this.products = products.data; 
    }

    public getProducts(): Product[] {
        return this.products;
    }
}