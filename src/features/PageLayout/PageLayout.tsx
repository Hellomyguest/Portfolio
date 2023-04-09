import { Layout } from "antd";
import { useUnit } from "effector-react";
import { Settings } from "./ui/Settings/Settings";
import { Navigation } from "./ui/Navigation/Navigation";
import { Contacts } from "./ui/Contacts/Contacts";
import { $theme } from "../theme-switcher/model/model";
import { Pages } from "../../pages";

const { Header, Sider, Content } = Layout;

export const PageLayout = () => {
  const themeValue = useUnit($theme);

  return (
    <>
      <Settings />
      <Layout
        style={{
          maxWidth: 1200,
          backgroundColor: "transparent",
          marginInline: "auto",
          paddingTop: "5rem",
        }}
      >
        <Sider style={{ borderRadius: "0.5rem" }}>Sider</Sider>
        <Content>
          <Layout style={{ marginLeft: 100, backgroundColor: "transparent" }}>
            <Header
              style={{
                paddingInline: "1rem",
                borderRadius: "0.5rem",
                backgroundColor: themeValue === "dark" ? "black" : "white",
              }}
            >
              <Contacts />
              <Navigation />
            </Header>
            <Content style={{ marginTop: 100 }}>
              <Pages />
            </Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};
