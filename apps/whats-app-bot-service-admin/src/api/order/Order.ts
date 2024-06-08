import { DigitalProduct } from "../digitalProduct/DigitalProduct";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  deliveryMethod?: "Option1" | null;
  digitalProduct?: DigitalProduct | null;
  id: string;
  orderDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
