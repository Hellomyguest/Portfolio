import Icon, {
  GithubFilled,
  GitlabFilled,
  MailOutlined,
} from "@ant-design/icons";
import { Space, Button } from "antd";
import { useTranslation } from "react-i18next";
import { ReactComponent as VkIcon } from "./lib/icons/vk.svg";
import { ReactComponent as TelegramIcon } from "./lib/icons/telegram.svg";

export const Contacts = () => {
  const { t } = useTranslation();

  return (
    <Space direction="horizontal" align="center" style={{ float: "right" }}>
      <Button
        size="small"
        href="https://vk.com/hellomyguest"
        type="link"
        target="_blank"
        icon={<Icon component={VkIcon} />}
      />
      <Button
        size="small"
        href="https://t.me/Hellomyguest"
        type="link"
        target="_blank"
        icon={<Icon component={TelegramIcon} />}
      />
      <Button
        size="small"
        href="https://github.com/Hellomyguest"
        type="link"
        target="_blank"
        icon={<GithubFilled />}
      />
      <Button
        size="small"
        href="https://gitlab.com/Hellomyguest"
        type="link"
        target="_blank"
        icon={<GitlabFilled />}
      />
      <Button type="primary" href="mailto:hellomyguest@yandex.ru">
        {t("navigation.hire")}
        <MailOutlined />
      </Button>
    </Space>
  );
};
