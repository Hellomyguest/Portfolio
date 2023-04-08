import { SettingOutlined } from "@ant-design/icons";
import { Button, Card, Space, Typography } from "antd";
import { useState } from "react";
import classNames from "classnames";
import styles from "./Settings.module.scss";
import { ThemeSwitcher } from "../../../../features/theme-switcher/ui/ThemeSwitcher";
import { LanguageSwitcher } from "../../../../features/language-switcher/ui/LanguageSwitcher";

const { Text } = Typography;

export const Settings = () => {
  const [isCollapsed, setCollapsed] = useState(true);
  const handleClick = () => setCollapsed(!isCollapsed);

  return (
    <div className={classNames(styles._, { [styles.open]: !isCollapsed })}>
      <Card className={styles.container}>
        <Space direction="vertical">
          <Space>
            <Text>Тема </Text>
            <ThemeSwitcher />
          </Space>
          <Space>
            <Text>Язык </Text>
            <LanguageSwitcher />
          </Space>
        </Space>
      </Card>
      <Button
        shape="circle"
        size="large"
        icon={<SettingOutlined spin />}
        onClick={handleClick}
        className={styles.button}
      />
    </div>
  );
};
