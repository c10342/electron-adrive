import classNames from "classnames";
import "./style.scss";

const BaseFontIcon = (props: { name: string; className?: string }) => {
  return (
    <span
      className={classNames("iconfont base-font-icon", `icon-${props.name}`, props.className)}
    ></span>
  );
};

export default BaseFontIcon;
