import { useTranslation } from "react-i18next";
import { ParagraphTitle, ProjectCard, CardsCarousel } from "../../shared/ui";
import CryptoImg from "./lib/images/CryptoCarousel.jpg";
import SchoolImg from "./lib/images/SchoolPreview.jpg";
import SchoolVideo from "./lib/images/school.mp4";
import AdminPanelImg from "./lib/images/AdminPanel.jpg";
import MockGeneratorImg from "./lib/images/MockGenerator.jpg";
import SearchCarImg from "./lib/images/SearchCar.jpg";
import YmapsImg from "./lib/images/Ymaps.jpg";

export const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <ParagraphTitle>{t("portfolioPage.completed")}</ParagraphTitle>
      <CardsCarousel
        cards={[
          <ProjectCard
            title="Crypto Carousel"
            link="https://cryptocarousel.fun/"
            tags={["JavaScript", "React", "React-router", "Web3", "Wagmi"]}
            cover={CryptoImg}
          />,
        ]}
      />
      <ParagraphTitle>{t("portfolioPage.current")}</ParagraphTitle>
      <CardsCarousel
        cards={[
          <ProjectCard
            title="JS school diary"
            tags={[
              "TypeScript",
              "React",
              "Effector",
              "Atomic-router",
              "Antd",
              "Lodash",
              "Eslint",
              "Husky",
              "Prettier",
            ]}
            cover={SchoolImg}
            video={SchoolVideo}
            githubLink="https://github.com/dpolevodin/js_school_diary"
          />,
        ]}
      />
      <ParagraphTitle>{t("portfolioPage.pet")}</ParagraphTitle>
      <CardsCarousel
        cards={[
          <ProjectCard
            title="Admin panel"
            tags={[
              "JavaScript",
              "React",
              "Redux-toolkit",
              "Lodash",
              "Eslint",
              "Husky",
              "Prettier",
            ]}
            cover={AdminPanelImg}
            link="https://hellomyguest.github.io/react-app/"
            githubLink="https://github.com/Hellomyguest/react-app"
          />,
          <ProjectCard
            title="Admin panel mocks generator"
            tags={["JavaScript", "HTML", "CSS"]}
            cover={MockGeneratorImg}
            link="https://hellomyguest.github.io/MockGenerator/"
            githubLink="https://github.com/Hellomyguest/MockGenerator"
          />,
          <ProjectCard
            title="Search car from xlsx file"
            tags={["JavaScript", "React", "Antd"]}
            cover={SearchCarImg}
            link="https://codesandbox.io/s/xlsxhandlerreact-ds0xuz?file=/src/App.js"
          />,
          <ProjectCard
            title="Ymaps custom animated placemarks"
            tags={["JavaScript", "React", "React-Yandex-maps"]}
            link="https://codesandbox.io/s/ymaps-custom-animated-placemarks-x2eevq"
            cover={YmapsImg}
          />,
        ]}
      />
    </>
  );
};
