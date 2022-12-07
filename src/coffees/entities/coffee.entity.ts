import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  name: string;
  brand: string;
  @Column('json', { nullable: true })
  flavors: string[];
}
