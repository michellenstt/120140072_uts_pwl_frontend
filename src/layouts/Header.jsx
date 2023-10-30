import * as Icons from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

const Header = () => {
  const navigate = useNavigate();

  const { cartItems } = useCartContext();
  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="p-5 flex items-center justify-between bg-blue-500 text-white rounded-md mt-5">
      <p
        className="font-semibold cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Toko Tas Online
      </p>
      <div
        className="bg-blue-600 px-5 py-2 rounded-full flex items-center gap-2 cursor-pointer"
        onClick={() => {
          navigate("/cart");
        }}
      >
        {cartItems.length > 0 && (
          <div className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {totalQuantity}
          </div>
        )}
        <Icons.FaShoppingCart />
      </div>
    </div>
  );
};

export default Header;
