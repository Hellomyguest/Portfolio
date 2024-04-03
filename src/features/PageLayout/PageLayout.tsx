import { useEffect, useState } from "react";
import { Avatar, Layout } from "antd";
import { useUnit } from "effector-react";
import classNames from "classnames";
import { Settings, ProfileCard, Contacts, Navigation } from "./ui";
import { $theme } from "../theme-switcher/model/model";
import { Pages } from "../../pages";
import Photo from "./ui/ProfileCard/lib/photo.jpg";
import styles from "./PageLayout.module.scss";
import { useResize } from "../../shared/utils/useResize";

const { Header, Content } = Layout;

export const PageLayout = () => {
  const themeValue = useUnit($theme);
  const [isLoading, setLoading] = useState(true);
  const { isScreenLg } = useResize();

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Layout
      className={classNames(styles._, { [styles.dark]: themeValue === "dark" })}
    >
      <Settings />
      <Layout className={styles.wrapper}>
        {isLoading && (
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={Photo}
            className={styles.avatar}
          />
        )}
        {isScreenLg && (
          <ProfileCard
            className={classNames(styles.hidden, {
              [styles.visible]: !isLoading,
            })}
            isScreenLg={isScreenLg}
          />
        )}
        <Layout
          className={classNames(styles.container, {
            [styles.container_visible]: !isLoading,
            [styles.container_md]: !isScreenLg,
          })}
        >
          <Header
            className={classNames(styles.header, {
              [styles.header_dark]: themeValue === "dark",
            })}
          >
            <Contacts />
            <Navigation />
          </Header>
          <Content
            className={classNames(styles.content, {
              [styles.content_dark]: themeValue === "dark",
            })}
          >
            <Pages />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
