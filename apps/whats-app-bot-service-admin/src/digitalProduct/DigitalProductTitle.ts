import { DigitalProduct as TDigitalProduct } from "../api/digitalProduct/DigitalProduct";

export const DIGITALPRODUCT_TITLE_FIELD = "name";

export const DigitalProductTitle = (record: TDigitalProduct): string => {
  return record.name?.toString() || String(record.id);
};
