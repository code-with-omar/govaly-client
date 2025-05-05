import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { useState } from "react";
import useProducts from "../hooks/useProducts";
import OrderTabs from "./OrderTabs";
const Products = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [product] = useProducts();
  console.log(product);
  const shirts = product.filter((item) => item.category === "shirt");
  const pants = product.filter((item) => item.category === "pants");
  const watch = product.filter((item) => item.category === "watch");
  const jacket = product.filter((item) => item.category === "jacket");
  const bag = product.filter((item) => item.category === "bag");
  console.log(shirts);
  return (
    <section className="mb-12 md:mb-16 lg:mb-20">
      {/* tab  */}
      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="mt-4 md:mt-12 lg:mt-14"
      >
        <TabList className="flex justify-center gap-x-4 mb-5 md:mb-10 w-4/5 mx-auto text-[#2ecd93] text-center uppercase text-base lg:text-xl md:text-lg font-bold cursor-pointer">
          <Tab
            className={`hover:text-[#BB8506] ${tabIndex === 0 ? "active" : ""}`}
          >
            shirts
          </Tab>
          <Tab
            className={`hover:text-[#BB8506] ${tabIndex === 1 ? "active" : ""}`}
          >
            Pants
          </Tab>
          <Tab
            className={`hover:text-[#BB8506] ${tabIndex === 2 ? "active" : ""}`}
          >
            Watch
          </Tab>
          <Tab
            className={`hover:text-[#BB8506] ${tabIndex === 3 ? "active" : ""}`}
          >
            Jacket
          </Tab>
          <Tab
            className={`hover:text-[#BB8506] ${tabIndex === 4 ? "active" : ""}`}
          >
            Bag
          </Tab>
        </TabList>
        <TabPanel>
          <OrderTabs item={shirts}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={pants}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={watch}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={jacket}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={bag}></OrderTabs>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Products;
