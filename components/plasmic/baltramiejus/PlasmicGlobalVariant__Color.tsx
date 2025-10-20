/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ColorValue =
  | "normal"
  | "purple"
  | "red"
  | "black"
  | "pink"
  | "gold";
export const ColorContext = React.createContext<ColorValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);
export function ColorContextProvider(
  props: React.PropsWithChildren<{ value: ColorValue | undefined }>
) {
  return (
    <ColorContext.Provider value={props.value}>
      {props.children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  return React.useContext(ColorContext);
}

export default ColorContext;
/* prettier-ignore-end */
