import { HomeFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "atomic-router-react";
import { useTranslation } from "react-i18next";
import { useUnit } from "effector-react";
import { routes } from "../../../../shared/lib/atomic-router/routes";
import { $theme } from "../../../theme-switcher/model/model";

export const Navigation = () => {
  const { t } = useTranslation();
  const themeValue = useUnit($theme);

  return (
    <Menu
      style={{ border: "none" }}
      theme={themeValue === "dark" ? "dark" : "light"}
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: 1,
          label: (
            <Link to={routes.home}>
              <HomeFilled />
            </Link>
          ),
        },
        {
          key: 2,
          label: <Link to={routes.resume}>{t("navigation.resume")}</Link>,
        },
        {
          key: 3,
          label: <Link to={routes.portfolio}>{t("navigation.portfolio")}</Link>,
        },
        {
          key: 4,
          label: <Link to={routes.growth}>{t("navigation.growth")}</Link>,
        },
        {
          key: 5,
          label: <Link to={routes.contacts}>{t("navigation.contacts")}</Link>,
        },
      ]}
    />
  );
};
