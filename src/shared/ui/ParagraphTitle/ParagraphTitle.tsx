import Title from "antd/es/typography/Title";
import classNames from "classnames";
import styles from "./ParagraphTitle.module.scss";

type PropsType = {
  children: string;
  className?: string;
};

export const ParagraphTitle = ({ className, children }: PropsType) => (
  <div className={classNames(styles._, className)}>
    <Title level={3} className={styles.title}>
      {children}
    </Title>
    <span className={styles.underline} />
  </div>
);

ParagraphTitle.defaultProps = {
  className: undefined,
};
