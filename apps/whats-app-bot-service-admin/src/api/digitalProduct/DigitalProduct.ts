import { Order } from "../order/Order";

export type DigitalProduct = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  updatedAt: Date;
};
