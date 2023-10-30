import TitleWithBack from "../components/TitleWithBack";
import { useCartContext } from "../hooks/useCartContext";

const CheckoutPage = () => {
  const { cartItems } = useCartContext();

  return (
    <div>
      <TitleWithBack title={"Checkout"} />
      <table className="w-full mt-5">
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.nama}</td>
              <td>Rp. {item.harga}</td>
              <td>{item.quantity}</td>
              <td>Rp. {item.harga * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5 text-center ">
        <p>
          Total : Rp.{" "}
          {cartItems.reduce((acc, curr) => acc + curr.harga * curr.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutPage;
