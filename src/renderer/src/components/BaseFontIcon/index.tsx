import classNames from "classnames";
import "./style.scss";
import { CSSProperties } from "react";

const BaseFontIcon = (props: { name: string; className?: string; style?: CSSProperties }) => {
  return (
    <span
      className={classNames("iconfont base-font-icon", `icon-${props.name}`, props.className)}
      style={props.style}
    ></span>
  );
};

export default BaseFontIcon;
