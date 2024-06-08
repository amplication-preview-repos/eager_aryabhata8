import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  DateTimeInput,
} from "react-admin";

import { DigitalProductTitle } from "../digitalProduct/DigitalProductTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="deliveryMethod"
          label="deliveryMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="digitalProduct.id"
          reference="DigitalProduct"
          label="DigitalProduct"
        >
          <SelectInput optionText={DigitalProductTitle} />
        </ReferenceInput>
        <DateTimeInput label="orderDate" source="orderDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
