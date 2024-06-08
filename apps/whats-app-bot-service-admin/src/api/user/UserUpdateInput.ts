import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nationalId?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  phoneNumber?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
