import React from "react";
import ProductItem from "./ProductItem";
import { nanoid } from "nanoid";

const ProductGrid = ({ products }: { products?: Product[] }) => {
  return (
    <div
      id="gridTop"
      className="max-w-screen-2xl grid gap-y-8 gap-x-5 mx-auto mt-12 px-5 max-[400px]:px-3 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {products &&
        products.map((product: Product) => (
          <ProductItem
            key={nanoid()}
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            popularity={product.popularity}
            stock={product.stock}
          />
        ))}
    </div>
  );
};
// Memoize the component to prevent unnecessary re-renders because of React.cloneElement
export default React.memo(ProductGrid);
