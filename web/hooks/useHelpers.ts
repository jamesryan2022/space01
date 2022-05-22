// import { useState } from "react";

const useHelpers = () => {
  // Sort Array Items by lowest to highest
  const sortByCheapest = (
    data: any[] = [
      { name: "Item A", price: 125 },
      { name: "Item B", price: 230 },
    ],
    value: string = "price"
  ) => {
    let sortedData = data.sort((a, b) => {
      return a[`${value}`] - b[`${value}`];
    });

    return sortedData;
  };

  return {
    sortByCheapest,
  };
};

export default useHelpers;
