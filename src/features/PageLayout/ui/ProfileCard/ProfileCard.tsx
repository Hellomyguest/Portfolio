import { PushpinFilled, DownloadOutlined } from "@ant-design/icons";
import {
  Layout,
  Timeline,
  Image,
  Button,
  Typography,
  List,
  Divider,
} from "antd";
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
  className?: string;
  isScreenLg: boolean;
  isScreenSm?: boolean;
};

const Content = ({ medium, small }: { medium?: boolean; small?: boolean }) => {
  const { t } = useTranslation();
  const infoData = [
    <>
      {!small && <Image src={Photo} className={styles.img_sm} />}
      <Text>
        <b>{t("profileCard.fullName")}</b> <br />
        <b>{t("profileCard.speciality")}</b>
      </Text>
    </>,
    <Text>
      <b>{t("profileCard.birthday.title")}</b>
      {t("profileCard.birthday.text")}
    </Text>,
    <Text>
      <b>{t("profileCard.job.title")}</b>
      {t("profileCard.job.text")}
    </Text>,
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
    </Text>,
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
    </Text>,
  ];
  return !medium ? (
    <>
      <div className={styles.info_wrapper}>
        {small && (
          <div className={styles.avatar_wrapper}>
            <Image src={Photo} className={styles.img_md} />
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
          </div>
        )}
        <List
          className={small ? styles.list : undefined}
          dataSource={infoData}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
      <Divider plain />
    </>
  ) : (
    <>
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
      )
    </>
  );
};

export const ProfileCard = ({
  className,
  isScreenLg,
  isScreenSm,
}: ProfileCardType) => {
  const themeValue = useUnit($theme);

  return isScreenLg ? (
    <Sider
      width="300px"
      className={classNames(styles._, className, {
        [styles.dark]: themeValue === "dark",
      })}
    >
      <Content />
    </Sider>
  ) : (
    <Content medium={isScreenLg} small={isScreenSm} />
  );
};

Content.defaultProps = {
  small: true,
  medium: true,
};

ProfileCard.defaultProps = {
  className: undefined,
  isScreenSm: true,
};
