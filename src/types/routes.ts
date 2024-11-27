import { FC, ReactElement } from "react";
export interface RouteMetaData {
  name: string;
  id?: string;
  path: string;
  element: FC<any> | null;
  linkName?: string;
  childElements?: RouteMetaData[];
}
