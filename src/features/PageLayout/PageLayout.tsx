import { Button, Image, Layout, Timeline, Typography } from "antd";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { DownloadOutlined, PushpinFilled } from "@ant-design/icons";
import { Settings } from "./ui/Settings/Settings";
import { Navigation } from "./ui/Navigation/Navigation";
import { Contacts } from "./ui/Contacts/Contacts";
import { $theme } from "../theme-switcher/model/model";
import { Pages } from "../../pages";
import Photo from "../../shared/images/photo.jpg";
import Resume from "../../shared/images/Resume.pdf";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

export const PageLayout = () => {
  const themeValue = useUnit($theme);
  const { t } = useTranslation();

  return (
    <Layout
      style={{
        height: "100vh",
        width: "100vw",
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
          height: "100%",
        }}
      >
        <Sider
          width="300px"
          style={{
            borderRadius: "0.5rem",
            padding: "1rem 0 2rem",
            backgroundColor: themeValue === "dark" ? "#001529" : "white",
            height: "fit-content",
          }}
        >
          <Title style={{ margin: 0, marginLeft: "1rem" }} level={5}>
            {t("profileCard.fullName")}
          </Title>
          <Text style={{ marginLeft: "1rem" }}>
            {t("profileCard.specialty")}
          </Text>
          <Image
            src={Photo}
            style={{ clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)" }}
          />
          <Timeline
            style={{ marginLeft: "1rem", marginTop: "-1.5rem" }}
            items={[
              {
                dot: <PushpinFilled style={{ fontSize: "1rem" }} />,
                children: <p style={{ color: "transparent" }}>Start</p>,
              },
              {
                children: (
                  <Text strong>
                    <b>{t("profileCard.birthday.title")}</b>
                    {t("profileCard.birthday.text")}
                  </Text>
                ),
              },
              {
                children: (
                  <Text>
                    <b>{t("profileCard.job.title")}</b>
                    {t("profileCard.job.text")}
                  </Text>
                ),
              },
              {
                children: (
                  <Text>
                    <b>{t("profileCard.mail")}</b> hellomyguest@yandex.ru
                  </Text>
                ),
              },
              {
                children: (
                  <Text>
                    <b>Telegram:</b> @hellomyguest
                  </Text>
                ),
              },
            ]}
          />
          <Button
            type="primary"
            href={Resume}
            download="Resume"
            target="_blank"
            icon={<DownloadOutlined />}
            style={{
              marginInline: "auto",
              display: "block",
              width: "fit-content",
            }}
          >
            Скачать резюме
          </Button>
        </Sider>

        <Layout style={{ marginLeft: "4rem", backgroundColor: "transparent" }}>
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
              marginTop: "4rem",
              borderRadius: "0.5rem",
              backgroundColor: "white",
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
