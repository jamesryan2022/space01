import * as React from "react";
import Index from "../pages/index";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import TestProducts from "../components/testComponents/testProducts";

configure({ adapter: new Adapter() });

const mockData = [
  { name: "A", price: 10 },
  { name: "B", price: 0 },
  { name: "C", price: 5 },
];

it("Index renders without crashing", () => {
  shallow(<Index data={mockData} />);
});

it("Prpducts renders without crashing", () => {
  shallow(<TestProducts products={mockData} />);
});
