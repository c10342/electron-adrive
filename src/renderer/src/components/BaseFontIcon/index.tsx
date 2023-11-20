import classNames from "classnames";
import "./style.scss";

type MergedHTMLAttributes = React.HTMLAttributes<HTMLElement> & {
  name: string;
  className?: string;
};

const BaseFontIcon = (props: MergedHTMLAttributes) => {
  return (
    <span
      {...props}
      className={classNames("iconfont base-font-icon", `icon-${props.name}`, props.className)}
    ></span>
  );
};

export default BaseFontIcon;
