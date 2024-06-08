import { DigitalProductWhereUniqueInput } from "../digitalProduct/DigitalProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  deliveryMethod?: "Option1" | null;
  digitalProduct?: DigitalProductWhereUniqueInput | null;
  orderDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
