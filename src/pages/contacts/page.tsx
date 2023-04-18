import { Button, List, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { ParagraphTitle } from "../../shared/ui/ParagraphTitle/ParagraphTitle";
import styles from "./page.module.scss";

const { Text } = Typography;

export const ContactsPage = () => {
  const { t } = useTranslation();
  const listData = [
    <Text>
      <b>{t("contactsPage.address.title")}</b>
      {t("contactsPage.address.text")}
    </Text>,
    <Text>
      <b>{t("contactsPage.phone")}</b>
      +7 950 5651550
    </Text>,
    <Text>
      <b>{t("profileCard.job.title")}</b>
      {t("profileCard.job.text")}
    </Text>,
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
    </Text>,
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
    </Text>,
    <Text>
      <b>GitHub:</b>{" "}
      <Button
        style={{ paddingLeft: 0 }}
        size="small"
        href="https://github.com/Hellomyguest"
        type="link"
        target="_blank"
      >
        Hellomyguest
      </Button>
    </Text>,
    <Text>
      <b>GitLab:</b>{" "}
      <Button
        style={{ paddingLeft: 0 }}
        size="small"
        href="https://gitlab.com/Hellomyguest"
        type="link"
        target="_blank"
      >
        Hellomyguest
      </Button>
    </Text>,
  ];

  return (
    <>
      <ParagraphTitle>{t("contactsPage.infoTitle")}</ParagraphTitle>
      <List
        dataSource={listData}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        style={{ width: "fit-content" }}
      />
      <ParagraphTitle className={styles.mapTitle}>
        {t("contactsPage.mapTitle")}
      </ParagraphTitle>
      <YMaps>
        <Map
          defaultState={{ center: [61.659727, 50.803161], zoom: 15 }}
          style={{ width: "100%", height: "30rem" }}
        >
          <Placemark geometry={[61.659727, 50.803161]} />
        </Map>
      </YMaps>
    </>
  );
};
