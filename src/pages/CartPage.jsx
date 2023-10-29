import CardCart from "../components/CardCart";
import TitleWithBack from "../components/TitleWithBack";

const CartPage = () => {
  return (
    <div>
      <TitleWithBack title={"Keranjang"} />
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
        <CardCart />
        <CardCart />
        <CardCart />
      </div>
    </div>
  );
};

export default CartPage;
