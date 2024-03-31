import { Carousel } from "antd";
import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import styles from "./CardCarousel.module.scss";

type CardsCarouselProps = {
  cards: ReactNode[];
  autoplay?: boolean;
  isScreenSm: boolean;
};

export const CardsCarousel = ({
  cards,
  autoplay,
  isScreenSm,
}: CardsCarouselProps) => (
  <Carousel autoplay={autoplay}>
    {cards.reduce((acc: ReactNode[], card, index) => {
      if (!isScreenSm) {
        acc.push(
          <div key={uuidv4()}>
            <div className={styles.wrapper}>{card}</div>
          </div>
        );
      } else if (index % 2 === 0 && cards.length > 1 && isScreenSm) {
        acc.push(
          <div key={uuidv4()}>
            <div className={classNames(styles.wrapper, styles.wrapper_multy)}>
              {card}
              {cards[index + 1]}
            </div>
          </div>
        );
      } else if (index === cards.length - 1 && acc.length < cards.length / 2) {
        acc.push(
          <div key={uuidv4()}>
            <div className={styles.wrapper}>{card}</div>
          </div>
        );
      }
      return acc;
    }, [])}
  </Carousel>
);

CardsCarousel.defaultProps = {
  autoplay: false,
};
