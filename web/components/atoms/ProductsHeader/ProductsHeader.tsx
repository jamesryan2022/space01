import { Dispatch, SetStateAction } from "react";
import { ProductsHeaderComp, ProductsInfo, ProductsText } from "./Style";
import Text from "../../atoms/Text/Text";
import InfoBubble from "../../atoms/InfoBubble/InfoBubble";
import Button from "../../atoms/Button/Button";
import SVG from "../SVG/SVG";
export interface ProductsHeaderProps {
  displayShowAll: boolean;
  handleShowAll: Dispatch<SetStateAction<boolean>>;
  handleCollapse: Dispatch<SetStateAction<boolean>>;
}

export default function ProductsHeader({
  displayShowAll,
  handleShowAll,
  handleCollapse,
}: ProductsHeaderProps) {
  return (
    <ProductsHeaderComp>
      <ProductsText>
        <Text size="h2">Products</Text>

        <div className="copy-wrapper">
          <Text size="bodyLarge">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </Text>
        </div>
      </ProductsText>

      <ProductsInfo>
        <InfoBubble>
          <SVG
            type="info"
            title="Information"
            desc="Letter I depicting preceding information"
          />
          <Text size="body" weight="bold">
            Currently showing {displayShowAll ? "the cheapest" : "all"} products
          </Text>
        </InfoBubble>

        {displayShowAll ? (
          <Button>
            <button onClick={() => handleShowAll(displayShowAll)}>
              <SVG
                type="show all"
                title="Stack of three items"
                desc="Shows stack of items"
              />
              Show All
            </button>
          </Button>
        ) : (
          <Button>
            <button onClick={() => handleCollapse(displayShowAll)}>
              <SVG
                type="collapse"
                title="Stack of two items"
                desc="Shows stack of items"
              />
              Collapse
            </button>
          </Button>
        )}
      </ProductsInfo>
    </ProductsHeaderComp>
  );
}
