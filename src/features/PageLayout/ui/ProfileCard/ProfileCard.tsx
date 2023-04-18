import { PushpinFilled, DownloadOutlined } from "@ant-design/icons";
import { Layout, Timeline, Image, Button, Typography } from "antd";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { $theme } from "../../../theme-switcher/model/model";
import Photo from "./lib/photo.jpg";
import Resume from "./lib/Resume.pdf";

const { Sider } = Layout;
const { Title, Text } = Typography;

type ProfileCardType = {
  className: string;
};

export const ProfileCard = ({ className }: ProfileCardType) => {
  const themeValue = useUnit($theme);
  const { t } = useTranslation();

  return (
    <Sider
      width="300px"
      style={{
        borderRadius: "0.5rem",
        padding: "1rem 0 2rem",
        backgroundColor: themeValue === "dark" ? "#001529" : "white",
        height: "fit-content",
      }}
      className={className}
    >
      <Title style={{ margin: 0, marginLeft: "1rem" }} level={5}>
        {t("profileCard.fullName")}
      </Title>
      <Text style={{ marginLeft: "1rem" }}>{t("profileCard.speciality")}</Text>
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
              <Text>
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
                <b>{t("profileCard.mail")}</b>{" "}
                <Button
                  style={{ paddingLeft: 0 }}
                  size="small"
                  type="link"
                  href="mailto:hellomyguest@yandex.ru"
                >
                  hellomyguest@yandex.ru
                </Button>
              </Text>
            ),
          },
          {
            children: (
              <Text>
                <b>Telegram:</b>{" "}
                <Button
                  style={{ paddingLeft: 0 }}
                  size="small"
                  href="https://t.me/Hellomyguest"
                  type="link"
                  target="_blank"
                >
                  @hellomyguest
                </Button>
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
  );
};
