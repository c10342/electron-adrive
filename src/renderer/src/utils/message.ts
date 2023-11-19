import { message } from "antd";

export const showWarningMessage = (msg: string) => {
  return message.open({
    type: "warning",
    content: msg
  });
};
