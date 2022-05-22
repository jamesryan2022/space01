import { ReactDOM, ReactNode } from "react";
import { Base } from "./Style";

export interface TextProps {
  size?: any;
  children: string | ReactNode;
  Tag?: keyof ReactDOM;
  weight?: "lighter" | "normal" | "bold";
  className?: string;
}

export default function Text({
  size = "body",
  children,
  Tag = "p",
  weight = "normal",
  className,
}: TextProps) {
  return (
    <Base size={size} weight={weight} className={className}>
      <Tag>{children}</Tag>
    </Base>
  );
}
