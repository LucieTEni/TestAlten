export enum STOCK {
    INSTOCK = "INSTOCK",
    LOWSTOCK = "LOWSTOCK",
    OUTOFSTOCK = "OUTOFSTOCK"
}

export interface Product {
    id: number;
	code: string,
    name: string,
    description: string,
    image: string,
    price: number,
    category: string,
    quantity: number,
    inventoryStatus: STOCK,
    rating: number
}