import Button from "../components/Button";
import TitleWithBack from "../components/TitleWithBack";
import * as Icons from "react-icons/fa";

const DetailPage = () => {
  return (
    <div>
      <TitleWithBack title={"Detail"} />
      <div className="mt-5 flex gap-3 bg-white p-5 rounded-lg w-1/2 mx-auto">
        <div className="w-56 h-56 bg-gray-500 rounded-lg"></div>
        <div>
          <h1 className="text-2xl font-semibold">Nama Produk</h1>
          <p className="text-lg">Rp. 120.000</p>
          <p className="text-lg mt-5">Deskripsi Produk</p>
          <p className="text-lg mt-5">Stok : 12</p>
          <Button className={"mt-5 flex items-center gap-3"}>
            Tambah ke Keranjang
            <Icons.FaShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
