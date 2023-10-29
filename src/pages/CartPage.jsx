import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CardCart from "../components/CardCart";
import TitleWithBack from "../components/TitleWithBack";
import * as Icons from "react-icons/fa";

const CartPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex">
        <TitleWithBack title={"Keranjang"} />
        <Button
          className={"flex items-center gap-2 ml-auto"}
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Checkout
          <Icons.FaLongArrowAltRight />
        </Button>
      </div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
        <CardCart />
        <CardCart />
        <CardCart />
      </div>
    </div>
  );
};

export default CartPage;
