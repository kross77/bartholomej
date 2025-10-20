/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1Icon(props: Group1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 154 269"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"3.494"}
        d={"M78.449 0v268.787"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeWidth={"3.065"}
        d={"M.007 90.54l153.404.67"}
      ></path>
    </svg>
  );
}

export default Group1Icon;
/* prettier-ignore-end */
