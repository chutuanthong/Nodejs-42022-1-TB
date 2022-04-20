import { Module } from '@nestjs/common';
import { AddressService } from 'src/address/address.service';
import { AddressResolver } from 'src/address/address.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  providers: [AddressResolver, AddressService],
})
export class AddressModule {}
