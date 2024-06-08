import { OrderCreateNestedManyWithoutDigitalProductsInput } from "./OrderCreateNestedManyWithoutDigitalProductsInput";

export type DigitalProductCreateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutDigitalProductsInput;
  price?: number | null;
};
