import * as Icons from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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
        100
        <Icons.FaShoppingCart />
      </div>
    </div>
  );
};

export default Header;
