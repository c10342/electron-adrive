import "./style.scss";
import { CloseOutlined, MinusOutlined } from "@ant-design/icons";

const BaseWinHeader = () => {
  return (
    <div className="base-win-header">
      <div className="icon-container">
        <div className="icon-item" onClick={() => window.api.minimizeWindow()}>
          <MinusOutlined />
        </div>
        <div className="icon-item close-icon" onClick={() => window.api.closeWindown()}>
          <CloseOutlined />
        </div>
      </div>
    </div>
  );
};

export default BaseWinHeader;
