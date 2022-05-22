import { ReactNode } from "react";
import { ProductGridComp, GridList } from "./Style";

export interface ProductGridProps {
  children: ReactNode;
}

export default function ProductGrid({ children }: ProductGridProps) {
  return (
    <ProductGridComp>
      <GridList>{children}</GridList>
    </ProductGridComp>
  );
}
