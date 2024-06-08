import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nationalId?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  username: string;
};
