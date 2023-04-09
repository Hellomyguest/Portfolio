import { useUnit } from "effector-react";
import { ConfigProvider, theme } from "antd";
import { $theme } from "./features/theme-switcher/model/model";
import { Themes } from "./features/theme-switcher/ui/ThemeSwitcher";
import { PageLayout } from "./features/PageLayout/PageLayout";

export const App = () => {
  const themeValue = useUnit($theme);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          themeValue === Themes.DARK
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
      }}
    >
      <PageLayout />
    </ConfigProvider>
  );
};
