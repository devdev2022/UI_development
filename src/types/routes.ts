import { FC, ReactElement } from "react";
export interface RouteMetaData {
  id?: string;
  path: string;
  element: FC<any> | null;
  linkName?: string;
  childElements?: RouteMetaData[];
}
