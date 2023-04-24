import { PushpinFilled, DownloadOutlined } from "@ant-design/icons";
import { Layout, Timeline, Image, Button, Typography } from "antd";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { $theme } from "../../../theme-switcher/model/model";
import styles from "./ProfileCard.module.scss";
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
      className={classNames(styles._, className, {
        [styles.dark]: themeValue === "dark",
      })}
    >
      <Title className={styles.title} level={5}>
        {t("profileCard.fullName")}
      </Title>
      <Text className={styles.text}>{t("profileCard.speciality")}</Text>
      <Image src={Photo} className={styles.img} />
      <Timeline
        className={styles.timeline}
        items={[
          {
            dot: <PushpinFilled className={styles.dot} />,
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
                  className={styles.button}
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
                  className={styles.button}
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
        className={styles.button_resume}
      >
        Скачать резюме
      </Button>
    </Sider>
  );
};
