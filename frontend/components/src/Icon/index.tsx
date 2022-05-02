import trash from "../static/svg/trash.svg";
import market from "../static/svg/market.svg";
import packageIcon from "../static/svg/package.svg";
import shoppingCartLine from "../static/svg/shoppingCartLine.svg";
import truck from "../static/svg/truck.svg";
import plus from "../static/svg/plus.svg";

export type IconNames =
  | "market"
  | "packageIcon"
  | "shoppingCartLine"
  | "truck"
  | "trash"
  | "plus";

const Icons: {
  [key in IconNames]: string;
} = {
  market,
  packageIcon,
  shoppingCartLine,
  truck,
  trash,
  plus,
};
interface Props {
  iconName: IconNames;
  width?: string;
  className?: string;
}

export const Icon = ({ iconName, width, className }: Props) => {
  return (
    <img
      className={className}
      style={{ width }}
      src={Icons[iconName]}
      alt={iconName}
    />
  );
};
