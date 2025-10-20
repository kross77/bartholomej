/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"1.555"}
        cy={"1.117"}
        r={"1"}
        fill={"#000"}
        fillOpacity={".5"}
      ></circle>

      <path
        fill={"#000"}
        fillOpacity={".5"}
        d={"M3.555.117h2v2h-2zm-1.5 3.5h.5v1h-.5v.5h-1v-.5h-.5v-1h.5v-.5h1z"}
      ></path>

      <circle
        cx={"4.555"}
        cy={"4.117"}
        r={"1"}
        fill={"#000"}
        fillOpacity={".5"}
      ></circle>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
