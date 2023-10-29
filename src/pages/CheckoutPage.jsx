import TitleWithBack from "../components/TitleWithBack";

const CheckoutPage = () => {
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
          <tr>
            <td>Produk 1</td>
            <td>10000</td>
            <td>2</td>
            <td>20000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutPage;
