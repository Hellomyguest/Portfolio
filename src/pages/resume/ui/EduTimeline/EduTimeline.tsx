import Icon, { CloseCircleFilled, DownCircleFilled } from "@ant-design/icons";
import {
  TimelineItemProps,
  Timeline,
  Badge,
  Button,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as EduIcon } from "../../lib/icons/education.svg";

const { Title } = Typography;

export const EduTimeline = () => {
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
              icon={<Icon component={EduIcon} />}
              onClick={handleClick}
            />
          </Badge>
        </Tooltip>
      ),
      children: <Title level={4}>{t("resumePage.edu.title")}</Title>,
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

  return <Timeline items={items.slice(0, isCollapsed ? 4 : undefined)} />;
};
