import React from "react";
import { FaPlus } from "react-icons/fa";
type productProp = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};
function Productcard({ productId, photo, name, price, stock }: productProp) {
  return (
    <div className="productcard">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>{price}</span>
      <div>
        <button>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default Productcard;
