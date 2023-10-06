import { Injectable } from "@angular/core";
import products from '../../assets/products.json';
import { Product, ProductsData } from "./product.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private products = [];
    private urlAPI = "http://127.0.0.1:8000";
    
    constructor(private http: HttpClient) {
        this.products = products.data; 
    }

    public getProducts(): Product[] {
        this.http.get<ProductsData>(this.urlAPI + '/products').subscribe(
            response => {
              return this.products = response.products
            }
        );
        return this.products;
    }

    public saved(newProduct: Product, offset?: number, length?: number): Product[] {
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

    public deleted(ids: number[], offset?: number, length?: number): Product[] {
        // with API 
        // return this.productAPI.deleteProduct(ids, offset, length);
        
        return this.products.filter(product => !ids.includes(product.id));
    }
}