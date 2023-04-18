import Title from "antd/es/typography/Title";
import classNames from "classnames";
import styles from "./ParagraphTitle.module.scss";

type PropsType = {
  children: string;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5;
};

export const ParagraphTitle = ({ className, level, children }: PropsType) => (
  <div className={classNames(styles._, className)}>
    <Title level={level} className={styles.title}>
      {children}
    </Title>
    <span className={styles.underline} />
  </div>
);

ParagraphTitle.defaultProps = {
  className: undefined,
  level: 3,
};
