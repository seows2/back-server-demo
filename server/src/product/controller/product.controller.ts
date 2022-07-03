import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductFindQuery } from '../dto/product-find-query';
import { ProductUploadRequest } from '../dto/product-upload-request';
import { ProductService } from '../service/product.service';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(@Query() query: ProductFindQuery) {
    const result = await this.productService.getProducts(query);
    return result;
  }

  @Get()
  async getProduct(@Param('id') id: number) {
    const result = await this.productService.getProduct(id);
    return result;
  }

  @Post()
  async addProduct(@Body() body: ProductUploadRequest): Promise<number> {
    const result = await this.productService.createProduct(body);
    return result;
  }

  @Post()
  async removProduct(@Param('id') id: number) {
    const result = await this.productService.deleteProduct(id);
    return result;
  }
}
