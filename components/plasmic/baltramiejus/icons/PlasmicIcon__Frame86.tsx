/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame86IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame86Icon(props: Frame86IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={
          "m1 14.701 5.926-6.85L1 1m7.926 13.701 5.927-6.85L8.926 1m7.927 13.701 5.926-6.85L16.853 1"
        }
      ></path>
    </svg>
  );
}

export default Frame86Icon;
/* prettier-ignore-end */
