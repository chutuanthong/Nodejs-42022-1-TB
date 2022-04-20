import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly repoAddress: Repository<Address>,
  ) {}

  async create(createAddressInput: CreateAddressInput) {
    const address = await this.repoAddress
      .createQueryBuilder()
      .insert()
      .into(Address)
      .values([createAddressInput])
      .execute();
    return address;
  }

  async findAll() {
    const address = await this.repoAddress
      .createQueryBuilder()
      .select('user')
      .from(Address, 'user')
      .getMany();
    return address;
  }

  async findOne(id: number) {
    const address = await this.repoAddress
      .createQueryBuilder()
      .select('user')
      .from(Address, 'user')
      .where('user.id = :id ', { id })
      .getOne();
    return address;
  }

  async update(id: number, updateAddressInput: UpdateAddressInput) {
    const address = await this.repoAddress
      .createQueryBuilder()
      .update(Address)
      .set(updateAddressInput)
      .where('id = :id', { id })
      .execute();
    return address;
  }

  async remove(id: number) {
    const address = await this.repoAddress
      .createQueryBuilder()
      .delete()
      .from(Address)
      .where('id = :id', { id })
      .execute();
    return address;
  }
}
