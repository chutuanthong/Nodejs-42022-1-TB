import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateDateColumn } from 'typeorm';

@InputType()
export class CreateAddressInput {
  @Field()
  country_code: number;

  @Field()
  city: string;

  @Field()
  stress_number: number;

  @Field()
  stress_name: string;

  // @Field({ defaultValue: Date.now() })
  // created_at: Date;

  // @Field({ defaultValue: Date.now() })
  // updated_at: Date;
}
