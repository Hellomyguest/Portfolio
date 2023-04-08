import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "atomic-router-react";
import { useTranslation } from "react-i18next";
import { Pages } from "../../../pages";
import { routes } from "../../lib/atomic-router/routes";
import { Settings } from "./Settings/Settings";

const { Header, Sider, Content } = Layout;

export const PageLayout = () => {
  const { t } = useTranslation();

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
        <Sider>Sider</Sider>
        <Content>
          <Layout style={{ marginLeft: 100, backgroundColor: "transparent" }}>
            <Header style={{ paddingInline: 0 }}>
              <Menu
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                overflowedIndicator={null}
                items={[
                  {
                    key: 1,
                    label: (
                      <Link to={routes.home}>
                        <HomeOutlined />
                      </Link>
                    ),
                  },
                  {
                    key: 2,
                    label: (
                      <Link to={routes.resume}>{t("navigation.resume")}</Link>
                    ),
                  },
                  {
                    key: 3,
                    label: (
                      <Link to={routes.portfolio}>
                        {t("navigation.portfolio")}
                      </Link>
                    ),
                  },
                  {
                    key: 4,
                    label: (
                      <Link to={routes.growth}>{t("navigation.growth")}</Link>
                    ),
                  },
                  {
                    key: 5,
                    label: (
                      <Link to={routes.contacts}>
                        {t("navigation.contacts")}
                      </Link>
                    ),
                  },
                ]}
              />
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
