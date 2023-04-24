/* eslint-disable no-script-url */
import { Progress, Tabs } from "antd";
import { useTranslation } from "react-i18next";
import { CardsCarousel, InfoCard, ParagraphTitle } from "../../shared/ui";
import {
  Kirichenko,
  Fowler,
  Haverbeke,
  Horstmann,
  Simpson1,
  Simpson2,
  Simpson3,
  Simpson4,
  Simpson5,
  Simpson6,
  Knuth1,
  Knuth2,
  Knuth3,
  Knuth4,
  Bhargava,
  Plachta,
  Nordman,
  Flanagan,
} from "./lib";

type CardType = {
  title: string;
  link: string;
};

type BookType = {
  cover: string;
  link: string;
};

const scheduledTraining: CardType[] = [
  {
    title: "Интенсив по реакт\n10.05.2023\nYlab University",
    link: "https://university.ylab.io/teach/",
  },
  {
    title: "Школа разработки интерфейсов\n06.06.2023\nАкадемия Яндекса",
    link: "https://academy.yandex.ru/schools/frontend",
  },
  {
    title: "Complete React Developer (partly)\nZero to Mastery, Udemy",
    link: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
  },
  {
    title: "React + Next.js - с нуля\nАнтон Ларичев, Udemy",
    link: "https://www.udemy.com/course/react-nextjs/",
  },
  {
    title:
      "Node.js, Express, MongoDB & More: The Complete Bootcamp\nJonas Schmedtmann, Udemy",
    link: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
  },
];

const completedTraining: CardType[] = [
  {
    title: "React and TypeScript\nSteve Kinney, FrontendMasters",
    link: "https://frontendmasters.com/courses/react-typescript/",
  },
];

const scheduledBooks: BookType[] = [
  {
    cover: Kirichenko,
    link: "https://www.chitai-gorod.ru/product/javascript-dlya-frontend-razrabotchikov-napisanie-testirovanie-razvertyvanie-2764197",
  },
  {
    cover: Fowler,
    link: "https://martinfowler.com/books/refactoring.html",
  },
  {
    cover: Haverbeke,
    link: "https://nostarch.com/ejs3",
  },
  {
    cover: Horstmann,
    link: "https://horstmann.com/javascript-impatient/",
  },
  {
    cover: Simpson1,
    link: "https://www.oreilly.com/library/view/you-dont-know/9781491924471/",
  },
  {
    cover: Simpson2,
    link: "https://www.oreilly.com/library/view/you-dont-know/9781449335571/",
  },
  {
    cover: Simpson3,
    link: "https://www.oreilly.com/library/view/you-dont-know/9781491905142/",
  },
  {
    cover: Simpson4,
    link: "https://www.oreilly.com/library/view/you-dont-know/9781491905159/",
  },
  {
    cover: Simpson5,
    link: "https://www.oreilly.com/library/view/you-dont-know/9781491905197/",
  },
  {
    cover: Simpson6,
    link: "https://www.oreilly.com/library/view/you-dont-know/9781491905241/",
  },
  {
    cover: Knuth1,
    link: "https://www.amazon.com/Art-Computer-Programming-Vol-Fundamental/dp/0201896834/ref=sr_1_4?qid=1682326850&refinements=p_27%3ADonald+Knuth&s=books&sr=1-4&text=Donald+Knuth",
  },
  {
    cover: Knuth2,
    link: "https://www.amazon.com/Art-Computer-Programming-Seminumerical-Algorithms/dp/0201896842/ref=sr_1_7?qid=1682326617&refinements=p_27%3ADonald+Knuth&s=books&sr=1-7&text=Donald+Knuth",
  },
  {
    cover: Knuth3,
    link: "https://www.amazon.com/Art-Computer-Programming-Sorting-Searching-ebook/dp/B01AY4ZHLI/ref=sr_1_12?qid=1682326617&refinements=p_27%3ADonald+Knuth&s=books&sr=1-12&text=Donald+Knuth",
  },
  {
    cover: Knuth4,
    link: "https://www.amazon.com/Art-Computer-Programming-Combinatorial-Information/dp/0201038064/ref=sr_1_3?qid=1682326617&refinements=p_27%3ADonald+Knuth&s=books&sr=1-3&text=Donald+Knuth",
  },
  {
    cover: Bhargava,
    link: "https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230",
  },
  {
    cover: Plachta,
    link: "https://www.amazon.com/Grokking-Functional-Programming-Michal-Plachta/dp/1617291838/ref=sr_1_6?crid=3F9CCMG7C1J0X&keywords=plachta&qid=1682326986&s=books&sprefix=plachta%2Cstripbooks-intl-ship%2C201&sr=1-6",
  },
  {
    cover: Nordman,
    link: "https:,//www.amazon.com/Grokking-Simplicity-software-functional-thinking/dp/1617296201/ref=sr_1_1?crid=OOVVF8SWU7EM&keywords=normand+eric&qid=1682327092&s=books&sprefix=normand+eri%2Cstripbooks-intl-ship%2C174&sr=1-1",
  },
];

const readBooks: BookType[] = [
  {
    cover: Flanagan,
    link: "https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/",
  },
];

export const GrowthPage = () => {
  const { t } = useTranslation();
  const courses = [
    {
      key: "1",
      label: t("growthPage.courses.scheduled"),
      children: (
        <CardsCarousel
          cards={scheduledTraining.map((item) => (
            <InfoCard title={item.title} link={item.link} />
          ))}
        />
      ),
    },
    {
      key: "2",
      label: t("growthPage.courses.done"),
      children: (
        <CardsCarousel
          cards={completedTraining.map((item) => (
            <InfoCard title={item.title} link={item.link} />
          ))}
        />
      ),
    },
  ];

  const books = [
    {
      key: "1",
      label: t("growthPage.books.scheduled"),
      children: (
        <CardsCarousel
          cards={scheduledBooks.map((book) => (
            <InfoCard noPadding cover={book.cover} link={book.link} />
          ))}
        />
      ),
    },
    {
      key: "2",
      label: t("growthPage.books.done"),
      children: (
        <CardsCarousel
          cards={readBooks.map((book) => (
            <InfoCard noPadding cover={book.cover} link={book.link} />
          ))}
        />
      ),
    },
  ];

  return (
    <>
      <ParagraphTitle>{t("growthPage.leetCode")}</ParagraphTitle>
      <Progress
        percent={0.7}
        strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
      />
      <ParagraphTitle>{t("growthPage.courses.title")}</ParagraphTitle>
      <Tabs defaultActiveKey="1" items={courses} />
      <ParagraphTitle>{t("growthPage.books.title")}</ParagraphTitle>
      <Tabs defaultActiveKey="1" items={books} />
    </>
  );
};
