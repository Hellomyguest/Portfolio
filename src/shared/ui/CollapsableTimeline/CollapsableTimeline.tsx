import { CaretDownOutlined } from "@ant-design/icons";
import { Button, Timeline, TimelineItemProps } from "antd";
import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./CollapsableTimeline.module.scss";
import { useResize } from "../../utils/useResize";

export const CollapsableTimeline = ({
  items,
}: {
  items: TimelineItemProps[];
}) => {
  const { t } = useTranslation();
  const { isScreenSm } = useResize();
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
    ? items.slice(0, isScreenSm ? 3 : 2).concat(ExpandButton)
    : items.concat(ExpandButton);

  return <Timeline className={styles.timeline} items={collapsableItems} />;
};
