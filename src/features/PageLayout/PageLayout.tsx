import { useEffect, useState } from "react";
import { Avatar, Layout } from "antd";
import { useUnit } from "effector-react";
import classNames from "classnames";
import { Settings, ProfileCard, Contacts, Navigation } from "./ui";
import { $theme } from "../theme-switcher/model/model";
import { Pages } from "../../pages";
import Photo from "./ui/ProfileCard/lib/photo.jpg";
import styles from "./PageLayout.module.scss";

const { Header, Content } = Layout;

export const PageLayout = () => {
  const themeValue = useUnit($theme);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "block",
        paddingInline: "3rem",
        backgroundColor:
          themeValue === "dark" ? "rgba(0,0,0,0.65)" : "transparent",
      }}
    >
      <Settings />
      <Layout
        style={{
          maxWidth: 1200,
          backgroundColor: "transparent",
          marginInline: "auto",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          height: "100%",
        }}
      >
        {isLoading && (
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={Photo}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              border: "0.25rem solid #1668dc",
              boxSizing: "initial",
            }}
          />
        )}
        <ProfileCard
          className={classNames(styles.hidden, {
            [styles.visible]: !isLoading,
          })}
        />
        <Layout
          style={{
            marginLeft: "3rem",
            backgroundColor: "transparent",
          }}
          className={classNames(styles.hidden, {
            [styles.visible]: !isLoading,
          })}
        >
          <Header
            style={{
              paddingInline: "1rem",
              borderRadius: "0.5rem",
              backgroundColor: themeValue === "dark" ? "#001529" : "white",
            }}
          >
            <Contacts />
            <Navigation />
          </Header>
          <Content
            style={{
              marginTop: "3rem",
              borderRadius: "0.5rem",
              backgroundColor: themeValue === "dark" ? "#001529" : "white",
              padding: "2rem",
            }}
          >
            <Pages />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
