import "./style.scss";

export interface BaseColLayoutProps {
  header?: JSX.Element;
  content?: JSX.Element;
  footer?: JSX.Element;
}

const BaseColLayout = (props: BaseColLayoutProps) => {
  return (
    <div className="base-col-layout">
      {props.header ? <div className="header">{props.header}</div> : null}
      {props.content ? <div className="content">{props.content}</div> : null}
      {props.footer ? <div className="footer">{props.footer}</div> : null}
    </div>
  );
};

export default BaseColLayout;
