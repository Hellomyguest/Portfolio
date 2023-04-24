import { useTranslation } from "react-i18next";
import { ParagraphTitle, ProjectCard, CardsCarousel } from "../../shared/ui";
import {
  CryptoImg,
  SchoolImg,
  SchoolVideo,
  AdminPanelImg,
  MockGeneratorImg,
  SearchCarImg,
  YmapsImg,
} from "./lib";

type ProjectType = {
  title: string;
  tags: string[];
  cover: string;
  link?: string;
  video?: string;
  githubLink?: string;
};

const currentProjects: ProjectType[] = [
  {
    title: "JS school diary",
    tags: [
      "TypeScript",
      "React",
      "Effector",
      "Atomic-router",
      "Antd",
      "Lodash",
      "Eslint",
      "Husky",
      "Prettier",
    ],
    cover: SchoolImg,
    video: SchoolVideo,
    githubLink: "https://github.com/dpolevodin/js_school_diary",
  },
];

const doneProjects: ProjectType[] = [
  {
    title: "Crypto Carousel",
    link: "https://cryptocarousel.fun/",
    tags: ["JavaScript", "React", "React-router", "Web3", "Wagmi"],
    cover: CryptoImg,
  },
];

const petProjects: ProjectType[] = [
  {
    title: "Admin panel",
    tags: [
      "JavaScript",
      "React",
      "Redux-toolkit",
      "Lodash",
      "Eslint",
      "Husky",
      "Prettier",
    ],
    cover: AdminPanelImg,
    link: "https://hellomyguest.github.io/react-app/",
    githubLink: "https://github.com/Hellomyguest/react-app",
  },
  {
    title: "Admin panel mocks generator",
    tags: ["JavaScript", "HTML", "CSS"],
    cover: MockGeneratorImg,
    link: "https://hellomyguest.github.io/MockGenerator/",
    githubLink: "https://github.com/Hellomyguest/MockGenerator",
  },
  {
    title: "Search car from xlsx file",
    tags: ["JavaScript", "React", "Antd"],
    cover: SearchCarImg,
    link: "https://codesandbox.io/s/xlsxhandlerreact-ds0xuz?file=/src/App.js",
  },
  {
    title: "Ymaps custom animated placemarks",
    tags: ["JavaScript", "React", "React-Yandex-maps"],
    link: "https://codesandbox.io/s/ymaps-custom-animated-placemarks-x2eevq",
    cover: YmapsImg,
  },
];

export const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <ParagraphTitle>{t("portfolioPage.completed")}</ParagraphTitle>
      <CardsCarousel
        cards={doneProjects.map((project) => (
          <ProjectCard
            title={project.title}
            tags={project.tags}
            cover={project.cover}
            link={project.link}
            githubLink={project.githubLink}
          />
        ))}
      />
      <ParagraphTitle>{t("portfolioPage.current")}</ParagraphTitle>
      <CardsCarousel
        cards={currentProjects.map((project) => (
          <ProjectCard
            title={project.title}
            tags={project.tags}
            cover={project.cover}
            link={project.link}
            githubLink={project.githubLink}
          />
        ))}
      />
      <ParagraphTitle>{t("portfolioPage.pet")}</ParagraphTitle>
      <CardsCarousel
        cards={petProjects.map((project) => (
          <ProjectCard
            title={project.title}
            tags={project.tags}
            cover={project.cover}
            link={project.link}
            githubLink={project.githubLink}
          />
        ))}
      />
    </>
  );
};
