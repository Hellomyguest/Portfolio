import { CaretDownOutlined } from "@ant-design/icons";
import { Button, Timeline, TimelineItemProps } from "antd";
import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./CollapsableTimeline.module.scss";

export const CollapsableTimeline = ({
  items,
}: {
  items: TimelineItemProps[];
}) => {
  const { t } = useTranslation();
  const [isCollapsed, setCollapsed] = useState(true);

  const handleClick = () => setCollapsed(!isCollapsed);

  const ExpandButton = {
    dot: <div />,
    children: (
      <Button
        type="primary"
        //  size="large"
        icon={
          <CaretDownOutlined
            className={classNames({
              [styles.icon__reverse]: !isCollapsed,
            })}
          />
        }
        onClick={handleClick}
        className={styles.button}
      >
        {isCollapsed ? t("resumePage.work.show") : t("resumePage.work.hide")}
      </Button>
    ),
  };

  const collapsableItems = isCollapsed
    ? items.slice(0, 3).concat(ExpandButton)
    : items.concat(ExpandButton);

  return <Timeline className={styles.timeline} items={collapsableItems} />;
};
