import "./style.scss";

export interface BaseColLayoutProps {
  left?: JSX.Element;
  content?: JSX.Element;
  right?: JSX.Element;
}

const BaseRowLayout = (props: BaseColLayoutProps) => {
  return (
    <div className="base-row-layout">
      {props.left ? <div className="left">{props.left}</div> : null}
      {props.content ? <div className="content">{props.content}</div> : null}
      {props.right ? <div className="right">{props.right}</div> : null}
    </div>
  );
};

export default BaseRowLayout;
