import { useEffect, useState } from "react";
import BaseFontIcon from "../BaseFontIcon";
import "./style.scss";
import { GlobalEventEnum } from "@share/event";

interface BaseWinHeaderProps {
  showMaximize?: boolean;
}

const BaseWinHeader = (props: BaseWinHeaderProps) => {
  const [isMaximize, setIsMaximize] = useState(false);
  const onMaximize = () => {
    setIsMaximize(true);
  };
  const onUnmaximize = () => {
    setIsMaximize(false);
  };
  useEffect(() => {
    window.api.on(GlobalEventEnum.Maximize, onMaximize);
    window.api.on(GlobalEventEnum.Unmaximize, onUnmaximize);
    return () => {
      window.api.off(GlobalEventEnum.Maximize, onMaximize);
      window.api.off(GlobalEventEnum.Unmaximize, onUnmaximize);
    };
  });
  return (
    <div className="base-win-header">
      <div className="icon-container">
        <div className="icon-item" onClick={() => window.api.minimizeWindow()}>
          <BaseFontIcon name="minimize" style={{ fontSize: "12px" }}></BaseFontIcon>
        </div>
        {props?.showMaximize ? (
          isMaximize ? (
            <div className="icon-item" onClick={() => window.api.unmaximizeWindown()}>
              <BaseFontIcon name="maximize" style={{ fontSize: "12px" }}></BaseFontIcon>
            </div>
          ) : (
            <div className="icon-item" onClick={() => window.api.maximizeWindown()}>
              <BaseFontIcon name="window-maximize" style={{ fontSize: "12px" }}></BaseFontIcon>
            </div>
          )
        ) : null}

        <div className="icon-item close-icon" onClick={() => window.api.closeWindown()}>
          <BaseFontIcon name="close" style={{ fontSize: "14px" }}></BaseFontIcon>
        </div>
      </div>
    </div>
  );
};

const defaultProps: BaseWinHeaderProps = {
  showMaximize: true
};

BaseWinHeader.defaultProps = defaultProps;

export default BaseWinHeader;
