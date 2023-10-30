import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CardCart from "../components/CardCart";
import TitleWithBack from "../components/TitleWithBack";
import * as Icons from "react-icons/fa";
import { useCartContext } from "../hooks/useCartContext";

const CartPage = () => {
  const navigate = useNavigate();

  const { cartItems } = useCartContext();

  return (
    <div>
      <div className="flex">
        <TitleWithBack title={"Keranjang"} />
        <Button
          className={"flex items-center gap-2 ml-auto"}
          onClick={() => {
            if (cartItems.length === 0) {
              alert("Tidak ada produk di keranjang");
              return;
            }
            navigate("/checkout");
          }}
        >
          Checkout
          <Icons.FaLongArrowAltRight />
        </Button>
      </div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
        {cartItems.length === 0 && (
          <p className="col-span-full text-center">Tidak ada produk</p>
        )}
        {cartItems.map((item) => (
          <CardCart key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
