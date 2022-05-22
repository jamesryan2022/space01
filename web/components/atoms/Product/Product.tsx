import {
  ProductComp,
  Letter,
  ProductCompWrapper,
  PriceBlock,
  PriceLabel,
} from "./Style";
import { motion } from "framer-motion";
import Text from "../Text/Text";
export interface ProductProps {
  name: string;
  price: number;
  delay: number;
  initialLoad: boolean;
  productCount: number;
}

export default function Product({
  name,
  price,
  delay,
  initialLoad,
  productCount,
}: ProductProps) {
  // If not the initial load, animation takes please on Button Click
  // Minus 5 to reset the delay so we don't have to wait for the Cards to fade in
  if (!initialLoad) {
    delay = delay - 5;
  }

  const createLetter = () => {
    let letter = name.replaceAll("Item ", "");
    return <Letter>{letter}</Letter>;
  };

  return (
    <>
      <motion.li
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: delay * 0.3,
          },
        }}
        exit={{
          opacity: 0,
          y: 5,
          transition: {
            delay: delay * 0.3,
          },
        }}
      >
        <ProductComp>
          <ProductCompWrapper>
            <Text size="h3">{name}</Text>
            <PriceBlock>
              <PriceLabel className="priceLabel">£</PriceLabel>
              <Text size="h4">{price}</Text>
            </PriceBlock>
          </ProductCompWrapper>
          {createLetter()}
        </ProductComp>
      </motion.li>
    </>
  );
}
