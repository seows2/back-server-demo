import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  password: string;

  @Column({ length: 20 })
  name: string;

  @Column({ length: 40, unique: true })
  email: string;
}
