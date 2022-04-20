import { Module } from '@nestjs/common';
import { CountryService } from '../country/country.service';
import { CountryResolver } from '../country/country.resolver';

@Module({
  providers: [CountryResolver, CountryService],
})
export class CountryModule {}
