import { Controller, Post, Body, Get, Query, Param } from "@nestjs/common";

import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService ){}

    @Post()
    addProduct(@Body() completeBody: {
        title: string;
        price: number;
    }
    // @Body('title') prodTitle: string, @Body('price') prodPrice: number
    ){
        return this.productsService.saveProducts(completeBody.title, completeBody.price);
        
    }

    @Get('all')
    getProducts(){
        return this.productsService.getProducts();
    }

    // get single product by query
    // @Get('')
    // getSingleProduct(@Query('id') id: string){
    //     return this.productsService.getSingleProduct(id)
    // }

    //get single product by param
    @Get(':id')
    getSingleProduct(@Param('id') id: string){
        return this.productsService.getSingleProduct(id)
    }

}
