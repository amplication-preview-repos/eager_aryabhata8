import { DigitalProductWhereUniqueInput } from "../digitalProduct/DigitalProductWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  deliveryMethod?: "Option1";
  digitalProduct?: DigitalProductWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
