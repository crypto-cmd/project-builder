import { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};
export const Button = ({ href, onClick, className, children }: Props) => {
  return (
    <a href={href} className={`${className} cursor-pointer flex`} onClick={onClick}>
      {children}
    </a>
  );
};
