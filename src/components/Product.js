import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.img} alt={product.itemName} />
      <h3>{product.itemName}</h3>
      <div>Price: ${product.itemPrice}</div>
      <div>Available Quantity: {product.avalQty}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
//  id: 2,
//     itemName: "Butter",
//     itemPrice: 32,
//     avalQty: 0,
//     itemPrice: 56,
//     img: "https://picsum.photos/200",
