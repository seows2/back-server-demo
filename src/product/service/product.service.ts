import { Injectable } from '@nestjs/common';
import { Products } from '../domain/products';
import { ProductFindQuery } from '../dto/product-find-query';
import { ProductUploadRequest } from '../dto/product-upload-request';
import { Product } from '../entity/product';

@Injectable()
export class ProductService {
  constructor(private readonly products: Products) {}

  async getProducts(findQuery: ProductFindQuery) {
    try {
      const products = await this.products.findProductsByQueries(findQuery);
      return products;
    } catch (error) {
      // TODO 공통 ERROR RESPONSE
      return error;
    }
  }

  async getProduct(id: number) {
    try {
      const product = await this.products.findProductById(id);
      return product;
    } catch (error) {
      // TODO 공통 ERROR RESPONSE
      return error;
    }
  }

  async deleteProduct(id: number) {
    try {
      await this.products.deleteProduct(id);
    } catch (error) {
      // TODO 공통 ERROR RESPONSE
      return error;
    }
  }

  async createProduct(productBody: ProductUploadRequest) {
    try {
      const productEntity = Product.toEntity(productBody);
      const product = await this.products.createProduct(productEntity);
      return product.id;
    } catch (error) {
      // TODO 공통 ERROR RESPONSE
      return error;
    }
  }
}
