import { useState, useEffect } from "react";

const SCREEN_SM = 500;
const SCREEN_SMM = 600;
const SCREEN_MD = 800;
const SCREEN_LG = 968;
const SCREEN_XL = 1680;
const SCREEN_XXL = 1945;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: Event) => {
      setWidth((event?.target as Window).innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width > SCREEN_SM,
    isScreenSmm: width > SCREEN_SMM,
    isScreenMd: width > SCREEN_MD,
    isScreenLg: width > SCREEN_LG,
    isScreenXl: width > SCREEN_XL,
    isScreenXxl: width > SCREEN_XXL,
  };
};
