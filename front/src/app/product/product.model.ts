export enum STOCK {
    INSTOCK = "INSTOCK",
    LOWSTOCK = "LOWSTOCK",
    OUTOFSTOCK = "OUTOFSTOCK"
}

export enum Category {
    ACCESSORIES = "Accessories",
    FITNESS = "Fitness",
    CLOTHING = "Clothing",
    ELECTRONICS = "Electronics",
}

export interface Product {
    id?: number;
	code?: string,
    name?: string,
    description?: string,
    image?: string,
    price?: number,
    category?: string,
    quantity?: number,
    inventoryStatus?: STOCK,
    rating?: number
}

export class Product {

    constructor(arg: Product  = {}) {
        this.id = arg.id;
        this.name = arg.name;
        this.category = arg.category;
        this.code = arg.code;
        this.description = arg.description;
        this.price = arg.price;
        this.image = arg.image;
        this.quantity = arg.quantity;
        this.inventoryStatus = arg.inventoryStatus;
        this.rating = arg.rating
    }
}