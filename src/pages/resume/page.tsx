import { useTranslation } from "react-i18next";
import { Space, TimelineItemProps, Typography } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";
import { ParagraphTitle } from "../../shared/ui/ParagraphTitle/ParagraphTitle";
import { CollapsableTimeline } from "../../shared/ui";
import { ReactComponent as WorkIcon } from "./lib/icons/work.svg";
import { ReactComponent as EduIcon } from "./lib/icons/education.svg";
import styles from "./page.module.scss";

const { Title, Text } = Typography;

export const ResumePage = () => {
  const { t } = useTranslation();

  const workItems: TimelineItemProps[] = [
    {
      dot: (
        <div className={styles.logo}>
          <Icon component={WorkIcon} />
        </div>
      ),
      children: (
        <Title level={4} className={styles.title}>
          {t("resumePage.work.title")}
        </Title>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.sber")} - {t("profileCard.speciality")}
            <br />
            06-2023 - {t("resumePage.work.tillNow")}
          </Title>
          <Text>
            {t("resumePage.work.12.responsibilities.1")}
            <br />
            {t("resumePage.work.12.responsibilities.2")}
            <br />
            Code review
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.1.employer")} - {t("profileCard.speciality")}
            <br />
            11-2022 - 06-2023
          </Title>
          <Text>
            {t("resumePage.work.1.responsibilities")}
            <br />
            Code review
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.sber")} - {t("resumePage.work.2.speciality")}
            <br />
            07.2019 - 11-2022
          </Title>
          <Text>
            {t("resumePage.work.2.responsibilities.1")}
            <br />
            {t("resumePage.work.2.responsibilities.2")}
            <br />
            {t("resumePage.work.2.responsibilities.3")}
            <br />
            {t("resumePage.work.2.responsibilities.4")}
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            Crypto Carousel Development - {t("profileCard.speciality")}
            <br />
            01.2023 - 03.2023
          </Title>
          <Text>
            {t("resumePage.work.3.responsibilities.1")}
            <br />
            {t("resumePage.work.3.responsibilities.2")}
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.sber")} - {t("resumePage.work.4.speciality")}
            <br />
            01.2019 - 07.2019
          </Title>
          <Text>
            {t("resumePage.work.4.responsibilities.1")}
            <br />
            {t("resumePage.work.4.responsibilities.2")}
            <br />
            {t("resumePage.work.4.responsibilities.3")}
            <br />
            {t("resumePage.work.4.responsibilities.4")}
            <br />
            {t("resumePage.work.4.responsibilities.5")}
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.sber")} - {t("resumePage.work.5.speciality")}
            <br />
            09.2018 - 12.2018
          </Title>
          <Text>
            {t("resumePage.work.5.responsibilities.1")}
            <br />
            {t("resumePage.work.5.responsibilities.2")}
            <br />
            {t("resumePage.work.5.responsibilities.3")}
            <br />
            {t("resumePage.work.5.responsibilities.4")}
            <br />
            {t("resumePage.work.5.responsibilities.5")}
            <br />
            {t("resumePage.work.5.responsibilities.6")}
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.sber")} - {t("resumePage.work.6.speciality")}
            <br />
            09.2016 - 09.2018
          </Title>
          <Text>
            {t("resumePage.work.6.responsibilities.1")}
            <br />
            {t("resumePage.work.6.responsibilities.2")}
            <br />
            {t("resumePage.work.6.responsibilities.3")}
            <br />
            {t("resumePage.work.6.responsibilities.4")}
            <br />
            {t("resumePage.work.6.responsibilities.5")}
            <br />
            {t("resumePage.work.6.responsibilities.6")}
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.sber")} - {t("resumePage.work.7.speciality")}
            <br />
            05.2015 - 08.2016
          </Title>
          <Text>
            {t("resumePage.work.7.responsibilities.1")}
            <br />
            {t("resumePage.work.7.responsibilities.2")}
            <br />
            {t("resumePage.work.7.responsibilities.3")}
            <br />
            {t("resumePage.work.7.responsibilities.4")}
            <br />
            {t("resumePage.work.7.responsibilities.5")}
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.sber")} - {t("resumePage.work.8.speciality")}
            <br />
            03.2015 - 04.2015
          </Title>
          <Text>
            {t("resumePage.work.8.responsibilities.1")}
            <br />
            {t("resumePage.work.8.responsibilities.2")}
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.9.employer")} -{" "}
            {t("resumePage.work.9.speciality")}
            <br />
            09.2014 - 11.2014
          </Title>
          <Text>
            {t("resumePage.work.9.responsibilities.1")}
            <br />
            {t("resumePage.work.9.responsibilities.2")}
            <br />
            {t("resumePage.work.9.responsibilities.3")}
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.10.employer")} -{" "}
            {t("resumePage.work.10.speciality")}
            <br />
            04.2013 - 08.2014
          </Title>
          <Text>
            {t("resumePage.work.10.responsibilities.1")}
            <br />
            {t("resumePage.work.10.responsibilities.2")}
            <br />
            {t("resumePage.work.10.responsibilities.3")}
            <br />
            {t("resumePage.work.10.responsibilities.4")}
            <br />
            {t("resumePage.work.10.responsibilities.5")}
            <br />
            {t("resumePage.work.10.responsibilities.6")}
            <br />
            {t("resumePage.work.10.responsibilities.7")}
          </Text>
        </>
      ),
    },
    {
      children: (
        <>
          <Title level={5}>
            {t("resumePage.work.11.employer")} -{" "}
            {t("resumePage.work.11.speciality")}
            <br />
            02.2013 - 04.2013
          </Title>
          <Text>
            {t("resumePage.work.11.responsibilities.1")}
            <br />
            {t("resumePage.work.11.responsibilities.2")}
            <br />
            {t("resumePage.work.11.responsibilities.3")}
          </Text>
        </>
      ),
    },
  ];

  const eduItems: TimelineItemProps[] = [
    {
      dot: (
        <div className={styles.logo}>
          <Icon component={EduIcon} />
        </div>
      ),
      children: (
        <Title level={4} className={styles.title}>
          {t("resumePage.edu.title")}
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.1.course")}
          <br />
          08-2022 - 12-2022
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.2.course")}
          <br />
          03-2022
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.3.course")}
          <br />
          03-2022
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.4.course")}
          <br />
          02-2022
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.5.course")}
          <br />
          01-2022
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.6.course")}
          <br />
          12-2020
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.7.course")}
          <br />
          08-2020
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.8.course")}
          <br />
          08-2020
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.9.course")}
          <br />
          08-2020
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.10.course")}
          <br />
          08-2020
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.11.course")}
          <br />
          04-2020
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.12.course")}
          <br />
          04-2020
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.13.course")}
          <br />
          04-2020
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.sber")} - {t("resumePage.edu.14.course")}
          <br />
          10-2016 - 07-2017
        </Title>
      ),
    },
    {
      children: (
        <Title level={5}>
          {t("resumePage.edu.15.institute")} - {t("resumePage.edu.15.course")}
          <br />
          09-2008 - 06-2014
        </Title>
      ),
    },
  ];

  return (
    <>
      <ParagraphTitle>{t("resumePage.title")}</ParagraphTitle>
      <Space align="start">
        <CollapsableTimeline items={workItems} />
        <CollapsableTimeline items={eduItems} />
      </Space>
    </>
  );
};
