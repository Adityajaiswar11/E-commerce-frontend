/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Constant";
import Cartpage from "./Cartpage";

const Cart = () => {
  const [data, setData] = useState([]);
  const { cart, product } = useContext(Context);

  useEffect(() => {
    if (!cart.item) {
      return;
    }
    const id = Object.keys(cart.item);

    const total = product.filter((data) => {
      return id.includes(data.id.toString());
    });

    setData(total);
  }, [cart]);

  return (
    <>
      <div className="mt-[10rem] grid grid-cols-3">
        {data.length === 0 ? (
          <h2 className="text-center text-gray-700 font-bold mt-5">
            Your shopping bag is empty.
          </h2>
        ) : (
          ""
        )}
        {data.map((data) => (
          <Cartpage key={data?.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Cart;
