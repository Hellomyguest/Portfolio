import { Button, Card } from "antd";
import { ParagraphTitle } from "../../shared/ui/ParagraphTitle/ParagraphTitle";
import CryptoImg from "./lib/images/CryptoCarousel.jpg";

const { Meta } = Card;

export const PortfolioPage = () => (
  <>
    <ParagraphTitle>Выполненные проекты</ParagraphTitle>
    <Button type="link" href="https://cryptocarousel.fun/" target="_blank">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="crypto" src={CryptoImg} />}
      >
        <Meta title="Crypto Carousel" description="" />
      </Card>
    </Button>
    <ParagraphTitle>Текущие проекты</ParagraphTitle>
    <Button type="link" href="https://cryptocarousel.fun/" target="_blank">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="crypto" src={CryptoImg} />}
      >
        <Meta title="Crypto Carousel" description="" />
      </Card>
    </Button>
  </>
);
