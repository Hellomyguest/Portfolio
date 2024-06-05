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
  DatePicker,
} from "./lib";
import { useResize } from "../../shared/utils/useResize";

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
    link: "https://hellomyguest.github.io/cryptocarousel/",
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
  {
    title: "DatePicker",
    tags: ["TypeScript", "React", "Material UI"],
    link: "https://codesandbox.io/p/devbox/exciting-nash-w78zhk?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cltpp80cw0007356h8dcppawv%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cltpp80cw0002356hu3we728u%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cltpp80cw0004356h5uob10m6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cltpp80cw0006356hrmkc3mzh%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cltpp80cw0002356hu3we728u%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cltpp80cv0001356hg20cg0b9%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.tsx%2522%257D%255D%252C%2522id%2522%253A%2522cltpp80cw0002356hu3we728u%2522%252C%2522activeTabId%2522%253A%2522cltpp80cv0001356hg20cg0b9%2522%257D%252C%2522cltpp80cw0006356hrmkc3mzh%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cltpp80cw0005356hk5ldc205%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522cltpp80cw0006356hrmkc3mzh%2522%252C%2522activeTabId%2522%253A%2522cltpp80cw0005356hk5ldc205%2522%257D%252C%2522cltpp80cw0004356h5uob10m6%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cltpp80cw0003356heo3nvjez%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522id%2522%253A%2522cltpp80cw0004356h5uob10m6%2522%252C%2522activeTabId%2522%253A%2522cltpp80cw0003356heo3nvjez%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257Dhttps://codesandbox.io/p/devbox/exciting-nash-w78zhk?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cltpp80cw0007356h8dcppawv%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cltpp80cw0002356hu3we728u%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cltpp80cw0004356h5uob10m6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cltpp80cw0006356hrmkc3mzh%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cltpp80cw0002356hu3we728u%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cltpp80cv0001356hg20cg0b9%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.tsx%2522%257D%255D%252C%2522id%2522%253A%2522cltpp80cw0002356hu3we728u%2522%252C%2522activeTabId%2522%253A%2522cltpp80cv0001356hg20cg0b9%2522%257D%252C%2522cltpp80cw0006356hrmkc3mzh%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cltpp80cw0005356hk5ldc205%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522cltpp80cw0006356hrmkc3mzh%2522%252C%2522activeTabId%2522%253A%2522cltpp80cw0005356hk5ldc205%2522%257D%252C%2522cltpp80cw0004356h5uob10m6%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cltpp80cw0003356heo3nvjez%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522id%2522%253A%2522cltpp80cw0004356h5uob10m6%2522%252C%2522activeTabId%2522%253A%2522cltpp80cw0003356heo3nvjez%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D",
    cover: DatePicker,
  },
];

export const PortfolioPage = () => {
  const { t } = useTranslation();
  const { isScreenSmm } = useResize();

  return (
    <>
      <ParagraphTitle>{t("portfolioPage.completed")}</ParagraphTitle>
      <CardsCarousel
        isScreenSm={isScreenSmm}
        cards={[...doneProjects, ...currentProjects].map((project) => (
          <ProjectCard
            title={project.title}
            tags={project.tags}
            cover={project.cover}
            link={project.link}
            githubLink={project.githubLink}
            video={project.video}
          />
        ))}
      />
      {/*  <ParagraphTitle>{t("portfolioPage.current")}</ParagraphTitle>
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
      /> */}
      <ParagraphTitle>{t("portfolioPage.pet")}</ParagraphTitle>
      <CardsCarousel
        isScreenSm={isScreenSmm}
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
