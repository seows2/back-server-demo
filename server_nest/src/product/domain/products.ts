import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOperator, In, Like, Repository } from 'typeorm';
import { ProductFindQuery, WhereType } from '../dto/product-find-query';
import { Product } from '../entity/product';

const DEFAULT = {
  START_PAGE: 1,
  PRODUCT_PER_PAGE: 4,
};

const ORDER_TYPE = {
  default: { 'product.id': 'DESC' },
  new: { 'product.id': 'DESC' },
};

@Injectable()
export class Products {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findProductsByQueries(query: ProductFindQuery): Promise<Product[]> {
    const queryBuilder = this.productRepository
      .createQueryBuilder('product')
      .where(generateWhere(query.category, query.ids))
      .skip(
        ((query.page ?? DEFAULT.START_PAGE) - 1) *
          (query.size ?? DEFAULT.PRODUCT_PER_PAGE),
      )
      .take(query.size ?? DEFAULT.PRODUCT_PER_PAGE)
      .orderBy(ORDER_TYPE[query.order]);

    return queryBuilder.getMany();
  }

  async findAllProducts(): Promise<Product[]> {
    const allProducts = await this.productRepository.find({
      order: { id: 'DESC' },
    });
    return allProducts;
  }

  async findProductById(id: number): Promise<Product> {
    return this.productRepository.findOne(id);
  }

  async createProduct(product: Product) {
    const result = await this.productRepository.insert(product);
    const insertResult = this.findProductById(result.raw.insertId);
    return insertResult;
  }

  async deleteProduct(id: number) {
    await this.productRepository.delete(id);
  }
}

const wrapWordToLike = (word: string) => {
  if (!word) return Like('%%');
  return Like(`%${word}%`);
};

const generateWhere = (
  category: string,
  ids: FindOperator<unknown> | unknown[],
) => {
  const where: WhereType = {};

  if (ids) where.id = In(ids);
  if (category) where.category = wrapWordToLike(category);

  return where;
};
