import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
  DateTimeInput,
} from "react-admin";
import { DigitalProductTitle } from "../digitalProduct/DigitalProductTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
