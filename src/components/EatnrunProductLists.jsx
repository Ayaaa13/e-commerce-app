import React from "react";
import menuData from "../data/EatnrunMenuData";

const ProductListsData = menuData.ProductListsData;

const Products = (props) => {
  const handleClick = () => {
    return props.onItemClick(props.index);
  };

  return (
    <div className="product" onClick={handleClick}>
      <div className="product-image">
        <img src={props.img} alt="" />
      </div>
      <div className="product-title">
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const CreateProduct = (Product) => {
  return <Products key={Product.id} img={Product.img} title={Product.title} />;
};

const ProductList = () => {
  return (
    <div className="product-lists">{ProductListsData.map(CreateProduct)}</div>
  );
};

export default ProductList;
