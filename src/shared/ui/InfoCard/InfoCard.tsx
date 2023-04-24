import { Badge, Button, Card, Typography } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import styles from "./InfoCard.module.scss";

const { Title } = Typography;
const { Meta } = Card;

type InfoCardProps = {
  title?: string;
  link: string;
  cover?: string;
  noPadding?: boolean;
};

export const InfoCard = ({ title, link, cover, noPadding }: InfoCardProps) => (
  <Badge count={<LinkOutlined className={styles.badge} />}>
    <Button type="link" href={link} target="_blank" className={styles.button}>
      <Card
        bodyStyle={noPadding ? { padding: 0 } : undefined}
        hoverable
        className={styles.card}
        cover={cover ? <img alt="cover" src={cover} /> : null}
      >
        {title && (
          <Meta
            title={
              <Title level={5} className={styles.title}>
                {title}
              </Title>
            }
          />
        )}
      </Card>
    </Button>
  </Badge>
);

InfoCard.defaultProps = {
  title: null,
  cover: null,
  noPadding: false,
};
