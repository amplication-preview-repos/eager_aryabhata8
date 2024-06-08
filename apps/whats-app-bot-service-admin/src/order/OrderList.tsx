import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DIGITALPRODUCT_TITLE_FIELD } from "../digitalProduct/DigitalProductTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryMethod" source="deliveryMethod" />
        <ReferenceField
          label="DigitalProduct"
          source="digitalproduct.id"
          reference="DigitalProduct"
        >
          <TextField source={DIGITALPRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="orderDate" source="orderDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
