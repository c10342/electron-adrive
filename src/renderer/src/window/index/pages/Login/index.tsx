import { useState } from "react";
import classNames from "classnames";
import BaseWinHeader from "@renderer/components/BaseWinHeader";
import BaseColLayout from "@renderer/components/BaseColLayout";
import "./style.scss";
import { Checkbox, QRCode, Image, Form, Input, Button } from "antd";
import { LogoImage } from "@renderer/config/images";
import { showWarningMessage } from "@renderer/utils/message";
import { RouteEnum } from "@renderer/utils/enum";
import { useNavigate } from "react-router-dom";
import BaseFontIcon from "@renderer/components/BaseFontIcon";

enum TabTypeEnum {
  QrCode = 1,
  Password = 2,
  PhoneCode = 3
}

const RenderPhoneCode = (props: { setTabType: (data: TabTypeEnum) => any }) => {
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(3);
  const [loadingTime, setLoadingTime] = useState(false);
  const [formModel, setFormModel] = useState({
    phone: "",
    code: "",
    laws: false
  });
  const onFinish = (values: any) => {
    console.log("Success:", values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const getCode = () => {
    if (!formModel.phone) {
      showWarningMessage("请输入手机号码");
      return;
    }
    if (loadingTime) {
      return;
    }
    setLoadingTime(() => true);
    const run = (t: number) => {
      if (t <= 0) {
        setLoadingTime(false);

        setTime(3);
        return;
      }
      setTimeout(() => {
        setTime(t - 1);
        run(t - 1);
      }, 1000);
    };
    run(time);
  };
  const onSlaClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation();
    window.api.openWindown({ url: "sla.html", title: "阿里云盘服务协议" });
  };
  const onPrivacyPolicyClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation();
    window.api.openWindown({ url: "privacyPolicy.html", title: "阿里云盘隐私政策" });
  };
  return (
    <div className="phone-code-container">
      <div className="header-container">
        <BaseFontIcon
          name="back"
          className="back-icon"
          onClick={() => props.setTabType(TabTypeEnum.QrCode)}
        ></BaseFontIcon>
        <p className="header-label">短信验证</p>
      </div>
      <Form name="basic" autoComplete="off" size="large" onFinish={onFinish}>
        <Form.Item name="phone" rules={[{ required: true, message: "请输入手机号码" }]}>
          <Input
            placeholder="请输入手机号码"
            onChange={(e) => setFormModel((obj) => ({ ...obj, phone: e.target.value }))}
            value={formModel.phone}
          />
        </Form.Item>
        <Form.Item name="code" rules={[{ required: true, message: "请输入验证码" }]}>
          <div style={{ position: "relative" }}>
            <Input placeholder="请输入验证码" maxLength={7} />
            <div className="get-code-container" onClick={getCode}>
              {loadingTime ? `${time}s后重发` : "获取验证码"}
            </div>
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            block
            htmlType="submit"
            loading={loading}
            disabled={!formModel.laws}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
      <div className="laws-container">
        <Checkbox
          className="checkbox-container"
          onChange={(e) => setFormModel((obj) => ({ ...obj, laws: e.target.checked }))}
          checked={formModel.laws}
        ></Checkbox>
        <span
          className="checkbox-label"
          onClick={() => setFormModel((obj) => ({ ...obj, laws: !obj.laws }))}
        >
          未注册手机登录时会自动创建新账号，我已阅读并同意
          <span className="link-label" onClick={onSlaClick}>
            服务协议
          </span>
          和
          <span className="link-label" onClick={onPrivacyPolicyClick}>
            隐私权条款
          </span>
        </span>
      </div>
      <div className="other-container">
        <Checkbox className="checkbox-container">
          <span className="checkbox-label">下次自动登录</span>
        </Checkbox>
        <div
          className="code-login"
          onClick={() =>
            window.api.openUrl(
              "https://passport.aliyundrive.com/ac/password_find.htm?from_site=52&bizcode=yunpan"
            )
          }
        >
          找回密码？
        </div>
      </div>
    </div>
  );
};

const RenderQrcode = (props: { setTabType: (data: TabTypeEnum) => any }) => {
  return (
    <div className="qrcode-container">
      <QRCode value="https://ant.design/" />
      <div className="tip">请用阿里云盘App扫码</div>
      <Checkbox className="checkbox-container mt-20">
        <span className="checkbox-label">下次自动登录</span>
      </Checkbox>
      <div className="register-tip" onClick={() => props.setTabType(TabTypeEnum.PhoneCode)}>
        还没账号？注册一个
      </div>
    </div>
  );
};

const RenderPassword = (props: { setTabType: (data: TabTypeEnum) => any }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    console.log("Success:", values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(RouteEnum.Home);
      window.api.setWinAttr({
        resizable: true,
        minSize: { width: 1000, height: 700 },
        size: { width: 1000, height: 700 }
      });
    }, 2000);
  };
  return (
    <div className="password-container">
      <Form name="basic" autoComplete="off" size="large" onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: "请输入手机号码" }]}>
          <Input placeholder="请输入手机号码" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        <Form.Item>
          <Button loading={loading} type="primary" block htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
      <div className="other-container">
        <Checkbox className="checkbox-container">
          <span className="checkbox-label">下次自动登录</span>
        </Checkbox>
        <span className="code-login" onClick={() => props.setTabType(TabTypeEnum.PhoneCode)}>
          验证码登录
        </span>
      </div>
      <div className="register-tip" onClick={() => props.setTabType(TabTypeEnum.PhoneCode)}>
        还没账号？注册一个
      </div>
    </div>
  );
};

const RenderContent = () => {
  const [tabType, setTabType] = useState(TabTypeEnum.Password);

  const RednerTabs = () => {
    return (
      <>
        <div className="tabs-container">
          <div
            className={classNames("tab-item", { "tab-active": tabType === TabTypeEnum.QrCode })}
            onClick={() => setTabType(TabTypeEnum.QrCode)}
          >
            扫码登录
          </div>
          <div
            className={classNames("tab-item", { "tab-active": tabType === TabTypeEnum.Password })}
            onClick={() => setTabType(TabTypeEnum.Password)}
          >
            账号密码
          </div>
        </div>

        {tabType === TabTypeEnum.QrCode ? <RenderQrcode setTabType={setTabType} /> : null}
        {tabType === TabTypeEnum.Password ? <RenderPassword setTabType={setTabType} /> : null}
      </>
    );
  };

  return (
    <div className="content-container">
      <Image className="mt-20" src={LogoImage} preview={false} height={48}></Image>
      <div className="login-container">
        {tabType === TabTypeEnum.PhoneCode ? (
          <RenderPhoneCode setTabType={setTabType} />
        ) : (
          <RednerTabs />
        )}
      </div>
    </div>
  );
};

const RenderFooter = () => {
  return (
    <div className="footer-container">
      <div className="download-app">下载阿里云盘App</div>
      <div
        className="register-tip"
        onClick={() => window.api.openUrl("https://yida.alibaba-inc.com/o/change/number#/")}
      >
        手机号不可用？点击这里
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="home-page">
      <BaseColLayout
        header={<BaseWinHeader />}
        content={<RenderContent />}
        footer={<RenderFooter />}
      />
    </div>
  );
};

export default Login;
