import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

import {Product} from './product.model';

@Injectable()
export class ProductsService {
    products: Product[] = [];

    saveProducts (title: string, price: number){

        const newProduct = new Product(uuidv4(), title, price);
        this.products.push(newProduct);

        return newProduct;

    }

    getProducts(){
        return [...this.products];
    }

    getSingleProduct(id: string){
        const pro =  this.products.find(element => element.id==id);
        if(!pro) throw new NotFoundException('No Products Found!');

        return pro;
    }
}