import Icon, { CloseCircleFilled, DownCircleFilled } from "@ant-design/icons";
import {
  Typography,
  Timeline,
  Badge,
  Button,
  Tooltip,
  TimelineItemProps,
} from "antd";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ReactComponent as WorkIcon } from "../../lib/icons/work.svg";

const { Title, Text } = Typography;

export const WorkTimeline = () => {
  const { t } = useTranslation();
  const [isCollapsed, setCollapsed] = useState(true);
  const handleClick = () => setCollapsed(!isCollapsed);
  const items: TimelineItemProps[] = [
    {
      dot: (
        <Tooltip
          title={
            isCollapsed ? t("resumePage.work.show") : t("resumePage.work.hide")
          }
        >
          <Badge
            count={
              isCollapsed ? (
                <DownCircleFilled style={{ color: "#f5222d" }} />
              ) : (
                <CloseCircleFilled style={{ color: "#f5222d" }} />
              )
            }
            offset={["-5%", "5%"]}
          >
            <Button
              type="primary"
              shape="circle"
              size="large"
              icon={<Icon component={WorkIcon} />}
              onClick={handleClick}
            />
          </Badge>
        </Tooltip>
      ),
      children: <Title level={4}>{t("resumePage.work.title")}</Title>,
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
            11-2022 - 06-2023{t("resumePage.work.tillNow")}
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
            07.2019 - {t("resumePage.work.tillNow")}
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

  return <Timeline items={items.slice(0, isCollapsed ? 4 : undefined)} />;
};
