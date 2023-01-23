import classnames from "classnames";
import styles from "./Button.module.scss";

export type ButtonProps = {
  title: string;
  handleClick: () => void;
  className?: string;
};

export const Button = ({ title, handleClick, className }: ButtonProps) => (
  <button
    type="button"
    onClick={handleClick}
    className={classnames(styles._, className)}
  >
    {title}
  </button>
);

Button.defaultProps = {
  className: null,
};
