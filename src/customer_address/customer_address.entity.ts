// import { JoinColumn, ManyToOne } from 'typeorm';
// import Versioning from 'src/helper/entity/version.entity';
// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import User from 'src/user/user.entity';
// import Product from 'src/product/product.entity';

// @Entity()
// export default class Cart {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column() quantity: number;

//   @ManyToOne(() => User, (user) => user.photos)
//   user: User;

//   @ManyToOne((type) => Product)
//   @JoinColumn()
//   product: Product;
//   versioning: Versioning;
// }
