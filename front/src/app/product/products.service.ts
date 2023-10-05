import { Injectable } from "@angular/core";
import products from '../../assets/products.json';
import { Product } from "./product.model";
import { EMPTY, isEmpty } from "rxjs";

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

    public saved(newProduct: Product): Product[] {
        if (Number(newProduct.id) === 0) {
            newProduct.id = Date.now();
            if (newProduct.code === '') {
                newProduct.code = (Math.random() + 1).toString(15).substring(7);
            }
            this.products.push(newProduct);
        } else {
            let product = this.products.find((p) => p.id === newProduct.id);
            product.code = newProduct.code;
            product.name = newProduct.name;
            product.category = newProduct.category;
            product.description = newProduct.description;
            product.image = newProduct.image;
            product.inventoryStatus = newProduct.inventoryStatus;
            product.price = newProduct.price;
            product.quantity = newProduct.quantity;
        }
        // with API 
        // this.productAPI.postSavedProduct(product);
        return this.products;
    }

    public deleted(ids: number[]): Product[] {
        // with API 
        // return this.productAPI.deleteProduct(ids);
        
        return this.products.filter(product => !ids.includes(product.id));
    }
}