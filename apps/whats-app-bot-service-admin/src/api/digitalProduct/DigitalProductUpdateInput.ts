import { OrderUpdateManyWithoutDigitalProductsInput } from "./OrderUpdateManyWithoutDigitalProductsInput";

export type DigitalProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutDigitalProductsInput;
  price?: number | null;
};
