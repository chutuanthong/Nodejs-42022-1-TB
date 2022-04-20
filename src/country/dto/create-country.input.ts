import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCountryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  description: string;
}
