import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

function ProductDetailPage() {
  const { productSlug } = useParams();

  return (
    <div>
      <h1>Product Details for: {productSlug}</h1>
    </div>
  );
}

export default ProductDetailPage;
