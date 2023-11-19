import { isNull, isUndefined } from "lodash-es";

export const isUndef = (data: any): data is undefined | null => {
  return isUndefined(data) || isNull(data);
  // return data == undefined || data == null;
};
