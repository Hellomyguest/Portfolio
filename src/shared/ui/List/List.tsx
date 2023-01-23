import { cloneElement } from "react";

export type ListProps = {
  icon: React.ReactElement;
  title: string;
  items: string[];
  className?: string;
};

export const List = ({ icon, title, items, className }: ListProps) => {
  const styledIcon = cloneElement(icon, { className });

  return (
    <div className={className}>
      <span>{title}</span>
      {styledIcon}
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

List.defaultProps = {
  className: null,
};
