import { Switch } from "antd";
import { useUnit } from "effector-react";
import { $theme, themeChanged } from "../model/model";
import { IconMoon, IconSun } from "../icons";

export enum Themes {
  DEFAULT = "default",
  DARK = "dark",
}

export const ThemeSwitcher = () => {
  const [themeValue, themeChangedFn] = useUnit([$theme, themeChanged]);

  const handleChange = (checked: boolean) =>
    checked ? themeChangedFn(Themes.DARK) : themeChangedFn(Themes.DEFAULT);

  return (
    <Switch
      checked={themeValue === Themes.DARK}
      onChange={handleChange}
      checkedChildren={<IconMoon />}
      unCheckedChildren={<IconSun />}
    />
  );
};
