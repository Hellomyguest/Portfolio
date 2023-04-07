import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "atomic-router-react";
import { Pages } from "../../../pages";
import { routes } from "../../lib/atomic-router/routes";

const { Header, Sider, Content } = Layout;

export const PageLayout = () => (
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
              { key: 2, label: <Link to={routes.resume}>Резюме</Link> },
              { key: 3, label: <Link to={routes.portfolio}>Портфолио</Link> },
              { key: 4, label: <Link to={routes.growth}>Развитие</Link> },
              { key: 5, label: <Link to={routes.contacts}>Контакты</Link> },
            ]}
          />
        </Header>
        <Content style={{ marginTop: 100 }}>
          <Pages />
        </Content>
      </Layout>
    </Content>
  </Layout>
);
