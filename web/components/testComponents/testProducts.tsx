import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ProductsHeader from "../atoms/ProductsHeader/ProductsHeader";
import Product from "../atoms/Product/Product";
import ProductGrid from "../atoms/ProductGrid/ProductGrid";

export interface ProductsProps {
  products: { name: string; price: number }[];
}

export default function TestProducts({ products }: ProductsProps) {
  const [displayShowAll, setDisplayShowAll] = useState(true);
  const [productCount, setProductCount] = useState(5);
  const [initialLoad, setInitialLoad] = useState(true);

  // To capture the wether it's the initial/first Load or
  // subscequent onClick event for animation within Product
  // See delay value for use
  useEffect(() => {
    setInitialLoad(false);
  }, [initialLoad]);

  // Set displayShowAll to true for button and infoBubble components
  const handleShowAll = () => {
    setDisplayShowAll((prevDisplayShowAll) => !prevDisplayShowAll);
    setProductCount(products.length);
  };

  // Set displayShowAll to false for button and infoBubble components
  // Set productCount to 5 as per the brief to display the first 5
  const handleCollapse = () => {
    setDisplayShowAll((prevDisplayShowAll) => !prevDisplayShowAll);
    setProductCount(5);
  };

  return (
    <>
      <ProductsHeader
        displayShowAll={displayShowAll}
        handleShowAll={handleShowAll}
        handleCollapse={handleCollapse}
      />
      <AnimatePresence>
        <ProductGrid>
          {products.map((product, i) => {
            if (i < productCount) {
              return (
                <Product
                  key={`product-${product.name.replaceAll(" ", "-")}`}
                  name={product.name}
                  price={product.price}
                  delay={i}
                  productCount={productCount}
                  initialLoad={initialLoad}
                />
              );
            }
          })}
        </ProductGrid>
      </AnimatePresence>
    </>
  );
}
