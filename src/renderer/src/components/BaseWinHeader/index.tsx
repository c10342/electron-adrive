import BaseFontIcon from "../BaseFontIcon";
import "./style.scss";

const BaseWinHeader = () => {
  return (
    <div className="base-win-header">
      <div className="icon-container">
        <div className="icon-item" onClick={() => window.api.minimizeWindow()}>
          <BaseFontIcon name="minimize"></BaseFontIcon>
        </div>
        <div className="icon-item close-icon" onClick={() => window.api.closeWindown()}>
          <BaseFontIcon name="close"></BaseFontIcon>
        </div>
      </div>
    </div>
  );
};

export default BaseWinHeader;
