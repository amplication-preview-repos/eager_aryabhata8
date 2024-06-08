import { DigitalProductWhereInput } from "./DigitalProductWhereInput";
import { DigitalProductOrderByInput } from "./DigitalProductOrderByInput";

export type DigitalProductFindManyArgs = {
  where?: DigitalProductWhereInput;
  orderBy?: Array<DigitalProductOrderByInput>;
  skip?: number;
  take?: number;
};
