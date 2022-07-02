import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductUploadRequest } from '../dto/product-upload-request';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column()
  price: number;

  @Column({ name: 'discount_rate', default: 0 })
  discountRate: number;

  @Column()
  stock: number;

  @Column()
  category: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  static toEntity(product: ProductUploadRequest) {
    return {
      name: product.name,
      price: product.price,
      discountRate: product.discountRate,
      stock: product.stock,
      category: product.category,
    } as unknown as Product;
  }

  getDiscountedPrice() {
    return Math.floor(
      this.discountRate === 0
        ? this.price
        : (this.price * (100 - this.discountRate)) / 100,
    );
  }
}
