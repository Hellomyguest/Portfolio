import { Button } from "../../shared/ui/Button/Button";

export type ButtonProps = {
  items: string[];
};

export const Navigation = ({ items }: ButtonProps) => (
  <div>
    {items.map((item) => (
      <Button title={item} handleClick={() => null} />
    ))}
  </div>
);
